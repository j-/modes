import * as React from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Radio: React.StatelessComponent<RadioProps> = (props) => (
	<input type="radio" {...props} />
);

export default Radio;
