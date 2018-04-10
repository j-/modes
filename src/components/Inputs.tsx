import * as React from 'react';
import OctalModeInput from '../containers/OctalModeInput';
import DecimalModeInput from '../containers/DecimalModeInput';
import SymbolicInput from '../containers/SymbolicInput';
import './Inputs.css';

const Inputs: React.StatelessComponent = () => (
	<div className="Inputs">
		<div className="Inputs-section Inputs-section-octal">
			<label htmlFor="Inputs-input-octal">Octal</label>
			<OctalModeInput id="Inputs-input-octal" />
		</div>
		<div className="Inputs-section Inputs-section-decimal">
			<label htmlFor="Inputs-input-decimal">Decimal</label>
			<DecimalModeInput id="Inputs-input-decimal" />
		</div>
		<div className="Inputs-section Inputs-section-symbolic">
			<label htmlFor="Inputs-input-symbolic">Symbolic</label>
			<SymbolicInput id="Inputs-input-symbolic" />
		</div>
	</div>
);

export default Inputs;
