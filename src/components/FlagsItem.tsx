import * as React from 'react';
import FlagCheckbox from '../containers/FlagCheckbox';
import BinaryFlagLabel from '../containers/BinaryFlagLabel';
import './FlagsItem.css';

export interface FlagsItemProps {
	flag: number;
}

const FlagsItem: React.StatelessComponent<FlagsItemProps> = ({ flag, children }) => (
	<FlagCheckbox className="FlagsItem" flag={flag}>
		<span className="FlagsItem-label">
			<span className="FlagsItem-children">{children}</span>
			<span className="FlagsItem-octal">{flag.toString(8).padStart(7, '0')}</span>
			<span className="FlagsItem-binary">
				<BinaryFlagLabel flag={flag} />
			</span>
		</span>
	</FlagCheckbox>
);

export default FlagsItem;
