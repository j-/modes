import * as React from 'react';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: never;
}

const TextInput: React.StatelessComponent<TextInputProps> = (props) => (
	<input type="text" {...props} />
);

export default TextInput;
