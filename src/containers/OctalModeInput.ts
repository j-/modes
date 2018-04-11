import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as classNames from 'classnames';
import TextInput, { TextInputProps } from '../components/TextInput';
import { setOctalValue, commitInputValues } from '../store/actions';
import './ModeInput.css';

import {
	ReducerState,
	getOctalInputValue,
	isOctalInputValid,
	isOctalInputEditing,
} from '../store';

const mapStateToProps = (state: ReducerState): TextInputProps => ({
	value: getOctalInputValue(state),
	type: 'number',
	min: 0,
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': !isOctalInputValid(state),
		'ModeInput--is-editing': isOctalInputEditing(state),
	}),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): TextInputProps => ({
	onChange: (e) => dispatch(
		setOctalValue(e.currentTarget.value)
	),
	onBlur: () => dispatch(commitInputValues()),
});

export default connect<TextInputProps, TextInputProps, TextInputProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
