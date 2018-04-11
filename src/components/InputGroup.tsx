import * as React from 'react';
import * as classNames from 'classnames';
import './InputGroup.css';

export interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
	highlightExact?: boolean;
	highlightPartial?: boolean;
	onMouseOver?: (e: React.MouseEvent<Element>) => void;
	onMouseOut?: (e: React.MouseEvent<Element>) => void;
}

const InputGroup: React.StatelessComponent<InputGroupProps> = ({
	highlightExact,
	highlightPartial,
	className,
	children,
	onMouseOver,
	onMouseOut,
	...props,
}) => (
	<label
		className={classNames('InputGroup', className, {
			'InputGroup--highlight-exact': highlightExact,
			'InputGroup--highlight-partial': highlightPartial,
		})}
		onMouseOver={onMouseOver}
		onMouseOut={onMouseOut}
	>
		<input {...props} />
		{children}
	</label>
);

export default InputGroup;
