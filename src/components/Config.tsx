import * as React from 'react';
import ShowFlagCheckbox from '../containers/ShowFlagCheckbox';
import HighlightBitsCheckbox from '../containers/HighlightBitsCheckbox';
import './Config.css';

const Config: React.StatelessComponent = () => (
	<div className="Config">
		<label>
			<ShowFlagCheckbox />
			<em>Show flags</em>
			<p>
				Shows the constant name of each flag or mask next to its
				checkbox or radio. These constants come from Linux's {' '}
				<a href="https://github.com/torvalds/linux/blob/master/include/uapi/linux/stat.h">stat.h</a>.
			</p>
		</label>

		<label>
			<HighlightBitsCheckbox />
			<em>Highlight bits</em>
			<p>
				Highlights other values that will be toggled on hover. Values
				will be pale yellow if some bits are flipped and a full yellow
				if all bits are flipped.
			</p>
		</label>
	</div>
);

export default Config;
