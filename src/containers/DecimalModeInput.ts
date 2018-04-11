import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as classNames from 'classnames';
import TextInput, { TextInputProps } from '../components/TextInput';
import { setDecimalValue, commitInputValues } from '../store/actions';
import './ModeInput.css';

import {
	ReducerState,
	getDecimalInputValue,
	isDecimalInputValid,
	isDecimalInputEditing,
} from '../store';

const mapStateToProps = (state: ReducerState): TextInputProps => ({
	value: getDecimalInputValue(state),
	type: 'number',
	min: 0,
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': !isDecimalInputValid(state),
		'ModeInput--is-editing': isDecimalInputEditing(state),
	}),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): TextInputProps => ({
	onChange: (e) => dispatch(
		setDecimalValue(e.currentTarget.value)
	),
	onBlur: () => dispatch(commitInputValues()),
});

export default connect<TextInputProps, TextInputProps, TextInputProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
