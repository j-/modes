import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as classNames from 'classnames';
import NumberInput, { NumberInputProps } from '../components/NumberInput';
import { setOctalValue, commitInputValues } from '../store/actions';
import './ModeInput.css';

import {
	ReducerState,
	getOctalInputValue,
	isOctalInputValid,
	isOctalInputEditing,
} from '../store';

const mapStateToProps = (state: ReducerState): NumberInputProps => ({
	value: getOctalInputValue(state),
	min: 0,
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': !isOctalInputValid(state),
		'ModeInput--is-editing': isOctalInputEditing(state),
	}),
	list: 'octal-suggestions',
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): NumberInputProps => ({
	onChange: (e) => dispatch(
		setOctalValue(e.currentTarget.value)
	),
	onBlur: () => dispatch(commitInputValues()),
});

export default connect<NumberInputProps, NumberInputProps, NumberInputProps>(
	mapStateToProps,
	mapDispatchToProps,
)(NumberInput);
