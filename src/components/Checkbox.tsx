import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: never;
}

const Checkbox: React.StatelessComponent<CheckboxProps> = (props) => (
	<input type="checkbox" {...props} />
);

export default Checkbox;
