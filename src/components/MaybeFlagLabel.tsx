import * as React from 'react';
import FlagLabel, { FlagLabelProps } from './FlagLabel';

export interface MaybeFlagLabelProps extends FlagLabelProps {
	showFlag: boolean;
}

const MaybeFlagLabel: React.StatelessComponent<MaybeFlagLabelProps> = ({ showFlag, ...props }) => (
	showFlag ? <FlagLabel {...props} /> : null
);

export default MaybeFlagLabel;
