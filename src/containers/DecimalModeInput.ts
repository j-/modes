import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as classNames from 'classnames';
import NumberInput, { NumberInputProps } from '../components/NumberInput';
import { setDecimalValue, commitInputValues } from '../store/actions';
import './ModeInput.css';

import {
	ReducerState,
	getDecimalInputValue,
	isDecimalInputValid,
	isDecimalInputEditing,
} from '../store';

const mapStateToProps = (state: ReducerState): NumberInputProps => ({
	value: getDecimalInputValue(state),
	min: 0,
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': !isDecimalInputValid(state),
		'ModeInput--is-editing': isDecimalInputEditing(state),
	}),
	list: 'decimal-suggestions',
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): NumberInputProps => ({
	onChange: (e) => dispatch(
		setDecimalValue(e.currentTarget.value)
	),
	onBlur: () => dispatch(commitInputValues()),
});

export default connect<NumberInputProps, NumberInputProps, NumberInputProps>(
	mapStateToProps,
	mapDispatchToProps,
)(NumberInput);
