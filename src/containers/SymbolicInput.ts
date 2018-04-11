import { connect } from 'react-redux';
import * as classNames from 'classnames';
import TextInput, { TextInputProps } from '../components/TextInput';
import { ReducerState, getSymbolString } from '../store';

const mapStateToProps = (state: ReducerState): TextInputProps => ({
	value: getSymbolString(state),
	type: 'string',
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': false,
		'ModeInput--is-editing': false,
	}),
	readOnly: true,
});

const mapDispatchToProps = () => ({});

export default connect<TextInputProps, TextInputProps, TextInputProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
