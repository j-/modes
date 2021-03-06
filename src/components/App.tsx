import * as React from 'react';
import Favicon from '../containers/Favicon';
import Header from './Header';
import FileTypes from './FileTypes';
import Inputs from './Inputs';
import Editors from '../containers/Editors';
import StickyBits from './StickyBits';
import FlagsList from './FlagsList';
import Suggestions from './Suggestions';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Favicon />

		<Header />

		<Inputs />
		<Editors />
		<StickyBits />
		<FileTypes />
		<FlagsList />

		<Suggestions />
	</div>
);

export default App;
