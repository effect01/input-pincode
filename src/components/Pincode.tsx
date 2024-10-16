import {
	c,
	useState,
	useEffect,
	Host,
	useEvent,
	Props,
	useRef,
	useProp
} from 'atomico';
import { PincodeProps } from './Pincode.type';
import { pincodeStyle } from '../css/pincode.style';

const EMPTY_STRING = '';

function PincodeComponent({
	length,
	onlyNumbers,
	disabled,
	placeholder,
	initializeInputFocus
}: Props<typeof PincodeComponent.props>): Host<{
	onChange: Event; // Host event listener for 'Change' event
}> {
	const inputsRef = useRef([]);
	const [hasError, setHasError] = useProp('hasError');
	const [values, setValues] = useState(new Array(length).fill(EMPTY_STRING));
	const [isCompleted, setisCompleted] = useState(false);
	const [value, setValue] = useState(EMPTY_STRING);

	// Dispatch event to notify about the pincode state (completed or not)

	const dispatchEvent = useEvent('Change', {
		bubbles: true,
		composed: true
	});

	const dispatchEnterEvent = useEvent('Enter', {
		bubbles: true,
		composed: true
	});

	// Function to handle input changes

	const handleInput = ({ value, index }: { value: string; index: number }) => {
		const newValues = [...values];
		const regex = onlyNumbers ? /^\d*$/ : /./; // Allow only numbers or any character based on the prop
		newValues[index] = regex.test(value) ? value : EMPTY_STRING;

		// Update the state with new values

		setValues(newValues);

		// Auto-focus to the next input when one character is entered

		if (regex.test(value) && value.length === 1 && index < length - 1) {
			inputsRef.current[index + 1].focus();
		}

		// Move focus to the previous input if the input is empty and backspace was pressed

		if (regex.test(value) && value.length === 0 && index != 0) {
			inputsRef.current[index - 1].focus();
		}
	};

	// Function to handle paste event. Example: '1234' => '1' '2' '3' '4'

	const handlePaste = (e: ClipboardEvent) => {
		e.preventDefault();
		const pastedData = e.clipboardData?.getData('text');
		if (pastedData) {
			const newValues = [...values];
			const regex = onlyNumbers ? /^\d*$/ : /./;
			// Fill the inputs with the pasted data if it matches the regex
			if (regex.test(pastedData)) {
				for (let i = 0; i < length && i < pastedData.length; i++) {
					newValues[i] = pastedData[i];
				}
				setValues(newValues);
				//auto select logic
				const nextIndex = Math.min(pastedData.length, length) - 1;
				inputsRef.current[nextIndex]?.focus();
			}
		}
	};

	// Function to handle key presses

	const handleKeyDown = (e: KeyboardEvent, index: number) => {
		const input = e.target as HTMLInputElement;

		// Handle backspace: move focus to previous input if current input is empty

		if (e.key === 'Backspace' && index > 0) {
			e.preventDefault();
			const newValues = [...values];
			newValues[index] = EMPTY_STRING;
			setValues(newValues);
			inputsRef.current[index - 1]?.focus();
			return;
		}

		// Handle regular input by updating values and moving focus

		const regex = onlyNumbers ? /^\d*$/ : /./;
		if (
			e.key.length === 1 &&
			e.key !== 'ArrowRight' &&
			e.key !== 'ArrowLeft' &&
			e.key !== 'Backspace' &&
			input.value !== EMPTY_STRING &&
			regex.test(e.key)
		) {
			e.preventDefault();
			handleInput({ value: e.key, index: index });
			return;
		}

		// Handle Enter key: Dispatch a custom event

		if (e.key === 'Enter') {
			e.preventDefault();
			dispatchEnterEvent({
				isCompleted,
				value
			});
			return;
		}

		// Navigate between inputs with left and right arrow keys

		if (e.key === 'ArrowLeft' && index > 0) {
			inputsRef.current[index - 1]?.focus();
		} else if (e.key === 'ArrowRight' && index < length - 1) {
			inputsRef.current[index + 1]?.focus();
		}
	};

	// ON INIT EFFECT

	useEffect(() => {
		initializeInputFocus && inputsRef.current[0].focus();
	}, []);

	// ON ERROR EFFECT

	useEffect(() => {
		hasError &&
			(setValues(new Array(length).fill(EMPTY_STRING)),
			initializeInputFocus && inputsRef.current[0].focus());
	}, [hasError]);

	// ON VALUES CHANGE EFFECT

	useEffect(() => {
		setisCompleted(values.every((val) => val.length === 1));
		setValue(values.join(''));
		values.join('').length > 0 && setHasError(false);
	}, [values]);

	// ON VALUE CHANGE  EFFECT

	useEffect(() => {
		dispatchEvent({
			isCompleted,
			value
		});
	}, [value]);

	return (
		<host shadowDom>
			<div class="webcomponent-input-pincode-container">
				{values.map(($value, index) => (
					<input
						className={`webcomponent-input-pincode ${
							$value.length >= 1 ? 'valid' : ''
						} ${' '} ${hasError ? 'has-error' : ''}`}
						key={'inputcode' + index}
						ref={(el) => (inputsRef.current[index] = el)}
						type={onlyNumbers ? 'tel' : 'text'}
						maxLength={1}
						placeholder={placeholder.charAt(0)}
						value={$value}
						disabled={disabled}
						onpaste={handlePaste }
						oninput={(e) => {
							e.preventDefault();
							handleInput({
								value: (e.target as HTMLInputElement).value,
								index
							});
						}}
						onkeydown={(e) => handleKeyDown(e as KeyboardEvent, index)}
					/>
				))}
			</div>
		</host>
	);
}

PincodeComponent.props = PincodeProps;

PincodeComponent.styles = [pincodeStyle];

export const Pincode = c(PincodeComponent);
