export const PincodeProps = {
	length: {
		type: Number,
		reflect: true,
		value: (): number => 4
	},
	onlyNumbers: { type: Boolean, reflect: true, value: (): boolean => true },
	disabled: { type: Boolean, reflect: true, value: (): boolean => false },
	hasError: { type: Boolean, reflect: true, value: (): boolean => false },
	defaultValue: { type: String, reflect: true, value: (): string => '' }
};
