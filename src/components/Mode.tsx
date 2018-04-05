import * as React from 'react';

export interface ModeProps {
	value: number;
}

const Mode: React.StatelessComponent<ModeProps> = (props) => (
	<span className="Mode">
		{props.value}
	</span>
);

export default Mode;
