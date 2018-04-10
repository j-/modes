import * as React from 'react';
import FileType from '../containers/FileType';
import Inputs from './Inputs';
import Editors from '../containers/Editors';
import FlagsList from './FlagsList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<h1>Mode</h1>

		<FileType />

		<br />
		<br />

		<Inputs />

		<br />
		<br />

		<Editors />

		<br />
		<br />

		<FlagsList />
	</div>
);

export default App;
