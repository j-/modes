import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Checkbox: React.StatelessComponent<CheckboxProps> = (props) => (
	<input type="checkbox" {...props} />
);

export default Checkbox;
