import * as React from 'react';
import ShowFlagCheckbox from '../containers/ShowFlagCheckbox';
import HighlightBitsCheckbox from '../containers/HighlightBitsCheckbox';

const Config: React.StatelessComponent = () => (
	<div className="Config">
		<label>
			<ShowFlagCheckbox />
			Show flags
		</label><br />

		<label>
			<HighlightBitsCheckbox />
			Highlight bits
		</label>
	</div>
);

export default Config;
