import * as React from 'react';
import ShowFlagCheckbox from '../containers/ShowFlagCheckbox';

const Config: React.StatelessComponent = () => (
	<div className="Config">
		<label>
			<ShowFlagCheckbox />
			Show flags
		</label>
	</div>
);

export default Config;
