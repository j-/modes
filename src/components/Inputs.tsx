import * as React from 'react';
import OctalModeInput from '../containers/OctalModeInput';
import DecimalModeInput from '../containers/DecimalModeInput';
import SymbolicInput from '../containers/SymbolicInput';
import './Inputs.css';

const Inputs: React.StatelessComponent = () => (
	<div className="Inputs">
		<div className="Inputs-section Inputs-section-octal">
			<h2><label htmlFor="Inputs-input-octal">Octal</label></h2>
			<OctalModeInput id="Inputs-input-octal" />
		</div>
		<div className="Inputs-section Inputs-section-decimal">
			<h2><label htmlFor="Inputs-input-decimal">Decimal</label></h2>
			<DecimalModeInput id="Inputs-input-decimal" />
		</div>
		<div className="Inputs-section Inputs-section-symbolic">
			<h2><label htmlFor="Inputs-input-symbolic">Symbolic</label></h2>
			<SymbolicInput id="Inputs-input-symbolic" />
		</div>
	</div>
);

export default Inputs;
