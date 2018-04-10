import * as React from 'react';
import FileType from '../containers/FileType';
import Inputs from './Inputs';
import PermissionsGrid from '../containers/PermissionsGrid';
import PermissionsSymbolic from '../containers/PermissionsSymbolic';
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

		<PermissionsGrid />

		<br />
		<br />

		<PermissionsSymbolic />

		<br />
		<br />

		<FlagsList />
	</div>
);

export default App;
