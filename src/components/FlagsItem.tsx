import * as React from 'react';
import FlagCheckbox from '../containers/FlagCheckbox';

export interface FlagsItemProps {
	flag: number;
}

const FlagsItem: React.StatelessComponent<FlagsItemProps> = ({ flag, children }) => (
	<FlagCheckbox className="FlagsItem" flag={flag}>
		{children}
	</FlagCheckbox>
);

export default FlagsItem;
