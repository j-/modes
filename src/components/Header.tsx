import * as React from 'react';
import Section from './Section';
import Config from './Config';
import Card from './Card';
import './Header.css';

const Header: React.StatelessComponent = () => (
	<Section className="Header">
		<Card>
			<h1>Modes</h1>

			<h2>Configuration</h2>
			<Config />
		</Card>
	</Section>
);

export default Header;
