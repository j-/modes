import * as React from 'react';
import FlagCheckbox from '../containers/FlagCheckbox';
import './FlagsItem.css';

export interface FlagsItemProps {
	flag: number;
}

const FlagsItem: React.StatelessComponent<FlagsItemProps> = ({ flag, children }) => (
	<label className="FlagsItem">
		<div className="FlagsItem-checkbox">
			<FlagCheckbox flag={flag} />
		</div>
		<div className="FlagsItem-label">
			{children}
		</div>
	</label>
);

export default FlagsItem;
