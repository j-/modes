import * as React from 'react';
import Section from './Section';
import Card from './Card';
import FlagCheckbox from '../containers/FlagCheckbox';
import MaybeFlagLabel from '../containers/MaybeFlagLabel';
import './StickyBits.css';

import {
	S_ISUID,
	S_ISGID,
	S_ISVTX,
} from '../stat';

const StickyBits: React.StatelessComponent = () => (
	<Section className="StickyBits">
		<Card>
			<h2>Sticky bit</h2>

			<fieldset>
				<div className="StickyBits-radios">
					<FlagCheckbox flag={S_ISUID}>
						<MaybeFlagLabel name="S_ISUID" />
						<strong>User</strong>
					</FlagCheckbox>

					<FlagCheckbox flag={S_ISGID}>
						<MaybeFlagLabel name="S_ISGID" />
						<strong>Group</strong>
					</FlagCheckbox>

					<FlagCheckbox flag={S_ISVTX}>
						<MaybeFlagLabel name="S_ISVTX" />
						<strong>Other</strong>
					</FlagCheckbox>
				</div>
			</fieldset>
		</Card>
	</Section>
);

export default StickyBits;
