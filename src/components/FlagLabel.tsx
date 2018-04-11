import * as React from 'react';

export interface FlagLabelProps {
	name: string;
}

const FlagLabel: React.StatelessComponent<FlagLabelProps> = ({ name }) => (
	<code>{name}</code>
);

export default FlagLabel;
