import * as React from 'react';
import Mode from '../containers/Mode';
import PermissionsGrid from '../containers/PermissionsGrid';

const App: React.StatelessComponent = () => (
	<div className="App">
		<h1>Mode</h1>
		<Mode />

		<br />
		<br />

		<PermissionsGrid />
	</div>
);

export default App;
