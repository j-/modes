import * as React from 'react';
import Mode from '../containers/Mode';
import PermissionsGrid from '../containers/PermissionsGrid';
import FlagsList from './FlagsList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<h1>Mode</h1>
		<Mode />

		<br />
		<br />

		<PermissionsGrid />

		<br />
		<br />

		<FlagsList />
	</div>
);

export default App;
