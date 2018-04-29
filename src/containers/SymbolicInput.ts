import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as classNames from 'classnames';
import TextInput, { TextInputProps } from '../components/TextInput';
import { setSymbolicValue, commitInputValues } from '../store/actions';
import './ModeInput.css';

import {
	ReducerState,
	getSymbolicInputValue,
	isSymbolicInputValid,
	isSymbolicInputEditing,
} from '../store';

const mapStateToProps = (state: ReducerState): TextInputProps => ({
	value: getSymbolicInputValue(state),
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': !isSymbolicInputValid(state),
		'ModeInput--is-editing': isSymbolicInputEditing(state),
	}),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): TextInputProps => ({
	onChange: (e) => dispatch(
		setSymbolicValue(e.currentTarget.value)
	),
	onBlur: () => dispatch(commitInputValues()),
});

export default connect<TextInputProps, TextInputProps, TextInputProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
