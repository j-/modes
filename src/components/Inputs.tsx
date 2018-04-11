import * as React from 'react';
import Section from './Section';
import OctalModeInput from '../containers/OctalModeInput';
import DecimalModeInput from '../containers/DecimalModeInput';
import SymbolicInput from '../containers/SymbolicInput';
import './Inputs.css';

const Inputs: React.StatelessComponent = () => (
	<div className="Inputs">
		<Section className="Inputs-section Inputs-section-octal">
			<div className="Inputs-input-wrapper">
				<h2><label htmlFor="Inputs-input-octal">Octal</label></h2>
				<OctalModeInput id="Inputs-input-octal" />
			</div>
		</Section>
		<Section className="Inputs-section Inputs-section-decimal">
			<div className="Inputs-input-wrapper">
				<h2><label htmlFor="Inputs-input-decimal">Decimal</label></h2>
				<DecimalModeInput id="Inputs-input-decimal" />
			</div>
		</Section>
		<Section className="Inputs-section Inputs-section-symbolic">
			<div className="Inputs-input-wrapper">
				<h2><label htmlFor="Inputs-input-symbolic">Symbolic</label></h2>
				<SymbolicInput id="Inputs-input-symbolic" />
			</div>
		</Section>
	</div>
);

export default Inputs;
