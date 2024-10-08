export const PincodeProps = {
	length: {
		type: Number,
		reflect: true,
		value: (): number => 4
	},
	initializeInputFocus: {
		type: Boolean,
		reflect: true,
		value: (): boolean => true
	},
	onlyNumbers: { type: Boolean, reflect: true, value: (): boolean => true },
	disabled: { type: Boolean, reflect: true, value: (): boolean => false },
	hasError: { type: Boolean, reflect: true, value: (): boolean => false },
	placeholder: {
		type: String,
		reflect: true,
		value: (): OneCharString => ''
	}
};
type OneCharString =
	| ''
	| 'a'
	| 'b'
	| 'c'
	| 'd'
	| 'e'
	| 'f'
	| 'g'
	| 'h'
	| 'i'
	| 'j'
	| 'k'
	| 'l'
	| 'm'
	| 'n'
	| 'o'
	| 'p'
	| 'q'
	| 'r'
	| 's'
	| 't'
	| 'u'
	| 'v'
	| 'w'
	| 'x'
	| 'y'
	| 'z'
	| 'A'
	| 'B'
	| 'C'
	| 'D'
	| 'E'
	| 'F'
	| 'G'
	| 'H'
	| 'I'
	| 'J'
	| 'K'
	| 'L'
	| 'M'
	| 'N'
	| 'O'
	| 'P'
	| 'Q'
	| 'R'
	| 'S'
	| 'T'
	| 'U'
	| 'V'
	| 'W'
	| 'X'
	| 'Y'
	| 'Z'
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '!'
	| '@'
	| '#'
	| '$'
	| '%'
	| '^'
	| '&'
	| '*'
	| '('
	| ')'
	| '-'
	| '_'
	| '='
	| '+'
	| '['
	| ']'
	| '{'
	| '}'
	| '|'
	| '\\'
	| ';'
	| ':'
	| "'"
	| '"'
	| ','
	| '.'
	| '/'
	| '<'
	| '>'
	| '?'
	| ' ';
