import * as React from 'react';
import Mode from '../containers/Mode';
import OctalModeInput from '../containers/OctalModeInput';
import DecimalModeInput from '../containers/DecimalModeInput';
import SymbolInput from '../containers/SymbolInput';
import PermissionsGrid from '../containers/PermissionsGrid';
import FlagsList from './FlagsList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<h1>Mode</h1>
		<Mode />

		<br />
		<br />

		<OctalModeInput />
		<DecimalModeInput />
		<SymbolInput />

		<br />
		<br />

		<PermissionsGrid />

		<br />
		<br />

		<FlagsList />
	</div>
);

export default App;
