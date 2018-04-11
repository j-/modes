import * as React from 'react';
import Favicon from '../containers/Favicon';
import Config from './Config';
import FileTypes from './FileTypes';
import Inputs from './Inputs';
import Editors from '../containers/Editors';
import FlagsList from './FlagsList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Favicon />

		<h1>Mode</h1>

		<Config />

		<Inputs />
		<Editors />
		<FileTypes />
		<FlagsList />

		<datalist id="octal-suggestions">
			<option value="0777" />
			<option value="0755" />
			<option value="0700" />
		</datalist>

		<datalist id="decimal-suggestions">
			<option value="511" />
			<option value="493" />
			<option value="448" />
		</datalist>
	</div>
);

export default App;
