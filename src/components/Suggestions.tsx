import * as React from 'react';

const Suggestions: React.StatelessComponent = () => (
	<>
		<datalist key={8} id="octal-suggestions">
			<option value="0777" />
			<option value="0755" />
			<option value="0700" />
		</datalist>

		<datalist key={10} id="decimal-suggestions">
			<option value="511" />
			<option value="493" />
			<option value="448" />
		</datalist>
	</>
);

export default Suggestions;
