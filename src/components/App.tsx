import * as React from 'react';
import Favicon from '../containers/Favicon';
import FileTypes from '../containers/FileTypes';
import Inputs from './Inputs';
import Editors from '../containers/Editors';
import FlagsList from './FlagsList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Favicon />

		<h1>Mode</h1>

		<Inputs />
		<Editors />
		<FileTypes />
		<FlagsList />
	</div>
);

export default App;
