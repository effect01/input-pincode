import { css } from 'atomico';

export const pincodeStyle = css`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	:host {
		font-size: 16px;
		--wc-input-pincode-container--gap: none;
		--wc-input-pincode-container--justify-content: space-between;

		--wc-input-pincode--padding: 0;
		--wc-input-pincode--margin: 0%;
		--wc-input-pincode--font-weight: 600;
		--wc-input-pincode--outline: 0px;
		--wc-input-pincode--border-width: 1.5px;
		--wc-input-pincode--border-style: solid;
		--wc-input-pincode--border-radius: 0.5rem;
		--wc-input-pincode--border-color: #d9d9d9;
		--wc-input-pincode--height: 3.81rem;
		--wc-input-pincode--width: 3.63rem;
		--wc-input-pincode--text-color: #21272a;
		--wc-input-pincode--background: transparent;
		--wc-input-pincode--font-size: 2rem;
		--wc-input-pincode--font-family: 'Montserrat', sans-serif;
		--wc-input-pincode--line-height: 2.5rem;
		/* valid */
		--wc-input-pincode--padding--valid: var(--wc-input-pincode--padding);
		--wc-input-pincode--margin--valid: var(--wc-input-pincode--margin);
		--wc-input-pincode--font-weight--valid: var(
			--wc-input-pincode--font-weight
		);
		--wc-input-pincode--outline--valid: var(--wc-input-pincode--outline);
		--wc-input-pincode--border-width--valid: var(
			--wc-input-pincode--border-width
		);
		--wc-input-pincode--border-style--valid: var(
			--wc-input-pincode--border-style
		);
		--wc-input-pincode--border-radius--valid: var(
			--wc-input-pincode--border-radius
		);
		--wc-input-pincode--height--valid: var(--wc-input-pincode--height);
		--wc-input-pincode--width--valid: var(--wc-input-pincode--width);
		--wc-input-pincode--text-color--valid: var(--wc-input-pincode--text-color);
		--wc-input-pincode--background--valid: var(--wc-input-pincode--background);
		--wc-input-pincode--font-size--valid: var(--wc-input-pincode--font-size);
		--wc-input-pincode--font-family--valid: var(
			--wc-input-pincode--font-family
		);
		--wc-input-pincode--line-height--valid: var(
			--wc-input-pincode--line-height
		);
		--wc-input-pincode--border-color--valid: #0079c8;
		/* error */
		--wc-input-pincode--padding--has-error: var(--wc-input-pincode--padding);
		--wc-input-pincode--margin--has-error: var(--wc-input-pincode--margin);
		--wc-input-pincode--font-weight--has-error: var(
			--wc-input-pincode--font-weight
		);
		--wc-input-pincode--outline--has-error: var(--wc-input-pincode--outline);
		--wc-input-pincode--border-width--has-error: var(
			--wc-input-pincode--border-width
		);
		--wc-input-pincode--border-style--has-error: var(
			--wc-input-pincode--border-style
		);
		--wc-input-pincode--border-radius--has-error: var(
			--wc-input-pincode--border-radius
		);
		--wc-input-pincode--height--has-error: var(--wc-input-pincode--height);
		--wc-input-pincode--width--has-error: var(--wc-input-pincode--width);
		--wc-input-pincode--text-color--has-error: var(
			--wc-input-pincode--text-color
		);
		--wc-input-pincode--border-color--has-error: #d60023;
		--wc-input-pincode--background--has-error: var(
			--wc-input-pincode--background
		);
		--wc-input-pincode--font-size--has-error: var(
			--wc-input-pincode--font-size
		);
		--wc-input-pincode--font-family--has-error: var(
			--wc-input-pincode--font-family
		);
		--wc-input-pincode--line-height--has-error: var(
			--wc-input-pincode--line-height
		);
		/* disabled */
		--wc-input-pincode--padding--disabled: var(--wc-input-pincode--padding);
		--wc-input-pincode--margin--disabled: var(--wc-input-pincode--margin);
		--wc-input-pincode--font-weight--disabled: var(
			--wc-input-pincode--font-weight
		);
		--wc-input-pincode--outline--disabled: var(--wc-input-pincode--outline);
		--wc-input-pincode--border-width--disabled: var(
			--wc-input-pincode--border-width
		);
		--wc-input-pincode--border-style--disabled: var(
			--wc-input-pincode--border-style
		);
		--wc-input-pincode--border-radius--disabled: var(
			--wc-input-pincode--border-radius
		);
		--wc-input-pincode--border-color--disabled: #d9d9d9;
		--wc-input-pincode--height--disabled: var(--wc-input-pincode--height);
		--wc-input-pincode--width--disabled: var(--wc-input-pincode--width);
		--wc-input-pincode--text-color--disabled: #21272a;
		--wc-input-pincode--background--disabled: #f8f8f8;
		--wc-input-pincode--font-size--disabled: var(--wc-input-pincode--font-size);
		--wc-input-pincode--font-family--disabled: var(
			--wc-input-pincode--font-family
		);
		--wc-input-pincode--line-height--disabled: var(
			--wc-input-pincode--line-height
		);
	}
	@media (max-width: 767px) {
		:host {
			--wc-input-pincode-container--gap: 0.5rem;
			--wc-input-pincode--font-size: 1.75rem;
			--wc-input-pincode--height: 2.847rem;
			--wc-input-pincode--width: 2.65rem;
		}
	}
	.webcomponent-input-pincode-container {
		display: flex;
		flex-direction: col;
		justify-content: var(--wc-input-pincode-container--justify-content);
		gap: var(--wc-input-pincode-container--gap);
	}
	.webcomponent-input-pincode,
	.webcomponent-input-pincode:focus,
	.webcomponent-input-pincode:focus-visible {
		height: var(--wc-input-pincode--height);
		width: var(--wc-input-pincode--width);
		margin: var(--wc-input-pincode--margin);
		outline: var(--wc-input-pincode--outline);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size);
		color: var(--wc-input-pincode--text-color);
		font-family: var(--wc-input-pincode--font-family);
		font-weight: var(--wc-input-pincode--font-weight);
		line-height: var(--wc-input-pincode--line-height);
		background-color: transparent;
		border-radius: var(--wc-input-pincode--border-radius);
		border-width: var(--wc-input-pincode--border-width);
		border-style: var(--wc-input-pincode--border-style);
		padding: var(--wc-input-pincode--padding);
	}
	.webcomponent-input-pincode:not(.valid) {
		border-color: var(--wc-input-pincode--border-color);
	}
	.webcomponent-input-pincode.valid {
		height: var(--wc-input-pincode--height--valid);
		width: var(--wc-input-pincode--width--valid);
		margin: var(--wc-input-pincode--margin--valid);
		font-weight: var(--wc-input-pincode--font-weight--valid);
		outline: var(--wc-input-pincode--outline--valid);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size--valid);
		color: var(--wc-input-pincode--text-color--valid);
		font-family: var(--wc-input-pincode--font-family--valid);
		line-height: var(--wc-input-pincode--line-height--valid);
		background-color: var(--wc-input-pincode--background--valid);
		border-radius: var(--wc-input-pincode--border-radius--valid);
		border-width: var(--wc-input-pincode--border-width--valid);
		border-style: var(--wc-input-pincode--border-style--valid);
		padding: var(--wc-input-pincode--padding--valid);
		border-color: var(--wc-input-pincode--border-color--valid);
	}
	.webcomponent-input-pincode.has-error {
		border-color: var(--wc-input-pincode--border-color--has-error);
		height: var(--wc-input-pincode--height--has-error);
		font-weight: var(--wc-input-pincode--font-weight--has-error);
		width: var(--wc-input-pincode--width--has-error);
		margin: var(--wc-input-pincode--margin--has-error);
		outline: var(--wc-input-pincode--outline--has-error);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size--has-error);
		color: var(--wc-input-pincode--text-color--has-error);
		font-family: var(--wc-input-pincode--font-family--has-error);
		line-height: var(--wc-input-pincode--line-height--has-error);
		background-color: var(--wc-input-pincode--background--has-error);
		border-radius: var(--wc-input-pincode--border-radius--has-error);
		border-width: var(--wc-input-pincode--border-width--has-error);
		border-style: var(--wc-input-pincode--border-style--has-error);
		padding: var(--wc-input-pincode--padding--has-error);
	}
	.webcomponent-input-pincode[disabled] {
		height: var(--wc-input-pincode--height--disabled);
		width: var(--wc-input-pincode--width--disabled);
		font-weight: var(--wc-input-pincode--font-weight--disabled);
		margin: var(--wc-input-pincode--margin--disabled);
		outline: var(--wc-input-pincode--outline--disabled);
		text-align: center;
		font-size: var(--wc-input-pincode--font-size--disabled);
		color: var(--wc-input-pincode--text-color--disabled);
		font-family: var(--wc-input-pincode--font-family--disabled);
		line-height: var(--wc-input-pincode--line-height--disabled);
		background-color: var(--wc-input-pincode--background--disabled);
		border-radius: var(--wc-input-pincode--border-radius--disabled);
		border-width: var(--wc-input-pincode--border-width--disabled);
		border-style: var(--wc-input-pincode--border-style--disabled);
		padding: var(--wc-input-pincode--padding--disabled);
		border-color: var(--wc-input-pincode--border-color--disabled);
	}
`;
