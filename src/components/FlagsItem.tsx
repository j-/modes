import * as React from 'react';
import FlagCheckbox from '../containers/FlagCheckbox';
import './FlagsItem.css';

export interface FlagsItemProps {
	flag: number;
}

const FlagsItem: React.StatelessComponent<FlagsItemProps> = ({ flag, children }) => (
	<FlagCheckbox className="FlagsItem" flag={flag}>
		<span className="FlagsItem-label">
			<span className="FlagsItem-children">{children}</span>
			<span className="FlagsItem-octal">{flag.toString(8).padStart(7, '0')}</span>
			<span className="FlagsItem-binary">{flag.toString(2).padStart(16, '0')}</span>
		</span>
	</FlagCheckbox>
);

export default FlagsItem;
