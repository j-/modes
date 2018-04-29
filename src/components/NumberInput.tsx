import * as React from 'react';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: never;
}

const NumberInput: React.StatelessComponent<NumberInputProps> = (props) => (
	<input type="number" {...props} />
);

export default NumberInput;
