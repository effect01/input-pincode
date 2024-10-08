import { css } from 'atomico';

export const pincodeStyle = css`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	:host {
		font-size: 16px;
		--wc-input-pincode--padding: 1rem solid;
		--wc-input-pincode--margin: 0%
		--wc-input-pincode--outline: 0px;
		--wc-input-pincode--border: 1.5px solid;
		--wc-input-pincode--border-radius: 0.5rem;
		--wc-input-pincode--border-color: #d9d9d9;
		--wc-input-pincode--height: 3.81rem;
		--wc-input-pincode--width: 3.62rem;
		--wc-input-pincode--text-color: #21272a;
		--wc-input-pincode--background: transparent;
		--wc-input-pincode--font-size: 2rem;
		--wc-input-pincode--font-family: 'Montserrat', sans-serif;;
		--wc-input-pincode--line-height: 2.5rem;
		/* valid */
		--wc-input-pincode--padding--valid: 1rem solid;
		--wc-input-pincode--margin--valid: 0%
		--wc-input-pincode--outline--valid: 0px;
		--wc-input-pincode--border--valid: 1.5px solid;
		--wc-input-pincode--border-radius--valid: 0.5rem;
		--wc-input-pincode--height--valid: 3.81rem;
		--wc-input-pincode--width--valid: 3.62rem;
		--wc-input-pincode--text-color--valid: #21272a;
		--wc-input-pincode--background--valid: 	transparent;
		--wc-input-pincode--font-size--valid: 2rem;
		--wc-input-pincode--font-family--valid: 'Montserrat', sans-serif;;
		--wc-input-pincode--line-height--valid: 2.5rem;
		--wc-input-pincode--border-color--valid: #0079c8;
		/* error */
		--wc-input-pincode--padding--has-error: 1rem solid;
		--wc-input-pincode--margin--has-error: 0%
		--wc-input-pincode--outline--has-error: 0px;
		--wc-input-pincode--border--has-error: 1.5px solid;
		--wc-input-pincode--border-radius--has-error: 0.5rem;
		--wc-input-pincode--height--has-error: 3.81rem;
		--wc-input-pincode--width--has-error: 3.62rem;
		--wc-input-pincode--text-color--has-error: #d60023;
		--wc-input-pincode--background--has-error: 		transparent;
		--wc-input-pincode--font-size--has-error: 2rem;
		--wc-input-pincode--font-family--has-error: 'Montserrat', sans-serif;;
		--wc-input-pincode--line-height--has-error: 2.5rem;
		/* disabled */
		font-size: 16px;
		--wc-input-pincode--padding--disabled: 1rem solid;
		--wc-input-pincode--margin--disabled: 0%
		--wc-input-pincode--outline--disabled: 0px;
		--wc-input-pincode--border--disabled: 1.5px solid;
		--wc-input-pincode--border-radius--disabled: 0.5rem;
		--wc-input-pincode--border-color--disabled: #d9d9d9;
		--wc-input-pincode--height--disabled: 3.81rem;
		--wc-input-pincode--width--disabled: 3.62rem;
		--wc-input-pincode--text-color--disabled: #21272a;
		--wc-input-pincode--background--disabled: 		#f8f8f8;
		--wc-input-pincode--font-size--disabled: 2rem;
		--wc-input-pincode--font-family--disabled: 'Montserrat', sans-serif;;
		--wc-input-pincode--line-height--disabled: 2.5rem;


	}
	.webcomponent-input-pincode-container {
		display: flex;
		flex-direction: col;
		gap: 1rem;
	}
	.webcomponent-input-pincode,
	.webcomponent-input-pincode:focus,
	.webcomponent-input-pincode:focus-visible {
		height: var(--wc-input-pincode--height);
		width: var(--wc-input-pincode--width);
		margin:  var(--wc-input-pincode--margin);
		outline: var(--wc-input-pincode--outline);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size);
		color:  var(--wc-input-pincode--text-color);
		font-family:  var(--wc-input-pincode--font-family);
		line-height:  var(--wc-input-pincode--line-height);
		background-color: transparent;
		border-radius: var(--wc-input-pincode--border-radius);
		border: var(--wc-input-pincode--border);
		padding: var(--wc-input-pincode--padding);
	}
	.webcomponent-input-pincode:not(.valid) {
		border-color: var(--wc-input-pincode--border-color);
	}
	.webcomponent-input-pincode.valid {
		height: var(--wc-input-pincode--height--valid);
		width: var(--wc-input-pincode--width--valid);
		margin:  var(--wc-input-pincode--margin--valid);
		outline: var(--wc-input-pincode--outline--valid);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size--valid);
		color:  var(--wc-input-pincode--text-color--valid);
		font-family:  var(--wc-input-pincode--font-family--valid);
		line-height:  var(--wc-input-pincode--line-height--valid);
		background-color:  var(--wc-input-pincode--background--valid);
		border-radius: var(--wc-input-pincode--border-radius--valid);
		border: var(--wc-input-pincode--border--valid);
		padding: var(--wc-input-pincode--padding--valid);
		border-color: var(--wc-input-pincode--border-color--valid);
	}
	.webcomponent-input-pincode.has-error {
		border-color: var(--wc-input-pincode--border-color--has-error);
		height: var(--wc-input-pincode--height--has-error);
		width: var(--wc-input-pincode--width--has-error);
		margin:  var(--wc-input-pincode--margin--has-error);
		outline: var(--wc-input-pincode--outline--has-error);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size--has-error);
		color:  var(--wc-input-pincode--text-color--has-error);
		font-family:  var(--wc-input-pincode--font-family--has-error);
		line-height:  var(--wc-input-pincode--line-height--has-error);
		background-color:  var(--wc-input-pincode--background--has-error);
		border-radius: var(--wc-input-pincode--border-radius--has-error);
		border: var(--wc-input-pincode--border--has-error);
		padding: var(--wc-input-pincode--padding--has-error);
	}
	.webcomponent-input-pincode[disabled] {
		height: var(--wc-input-pincode--height--disabled);
		width: var(--wc-input-pincode--width--disabled);
		margin:  var(--wc-input-pincode--margin--disabled);
		outline: var(--wc-input-pincode--outline--disabled);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size--disabled);
		color:  var(--wc-input-pincode--text-color--disabled);
		font-family:  var(--wc-input-pincode--font-family--disabled);
		line-height:  var(--wc-input-pincode--line-height--disabled);
		background-color:  var(--wc-input-pincode--background--disabled);
		border-radius: var(--wc-input-pincode--border-radius--disabled);
		border: var(--wc-input-pincode--border--disabled);
		padding: var(--wc-input-pincode--padding--disabled);
		border-color: var(--wc-input-pincode--border-color--disabled);

	}
`;
