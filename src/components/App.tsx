import * as React from 'react';
import Favicon from '../containers/Favicon';
import FileType from '../containers/FileType';
import Inputs from './Inputs';
import Editors from '../containers/Editors';
import FlagsList from './FlagsList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Favicon />

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
