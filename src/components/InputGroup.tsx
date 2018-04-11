import * as React from 'react';
import * as classNames from 'classnames';
import './InputGroup.css';

export interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const InputGroup: React.StatelessComponent<InputGroupProps> = ({ className, children, ...props }) => (
	<label className={classNames('InputGroup', className)}>
		<input {...props} />
		{children}
	</label>
);

export default InputGroup;
