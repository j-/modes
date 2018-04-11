import * as React from 'react';
import * as classNames from 'classnames';
import Section from './Section';
import Card from './Card';
import PermissionsGrid from '../containers/PermissionsGrid';
import PermissionsSymbolic from '../containers/PermissionsSymbolic';
import './Editors.css';

export interface EditorsProps {
	showFlag: boolean;
}

const Editors: React.StatelessComponent<EditorsProps> = ({ showFlag }) => (
	<div
		className={classNames('Editors', {
			'Editors--vertical': showFlag,
			'Editors--horizontal': !showFlag,
		})}
	>
		<Section className="Editors-editor">
			<Card className="Editors-card">
				<h2>Grid edit</h2>
				<PermissionsGrid />
			</Card>
		</Section>
		<Section className="Editors-editor">
			<Card className="Editors-card">
				<h2>Symbolic edit</h2>
				<PermissionsSymbolic />
			</Card>
		</Section>
	</div>
);

export default Editors;
