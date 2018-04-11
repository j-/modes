import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as classNames from 'classnames';
import TextInput, { TextInputProps as OwnProps } from '../components/TextInput';
import { setDecimalValue, commitInputValues } from '../store/actions';
import './ModeInput.css';

import {
	ReducerState,
	getDecimalInputValue,
	isDecimalInputValid,
	isDecimalInputEditing,
} from '../store';

interface StateProps {
	value?: string | string[] | number;
	type?: string;
	className?: string;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getDecimalInputValue(state),
	type: 'number',
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': !isDecimalInputValid(state),
		'ModeInput--is-editing': isDecimalInputEditing(state),
	}),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
	onChange: (e) => dispatch(
		setDecimalValue(e.currentTarget.value)
	),
	onBlur: () => dispatch(commitInputValues()),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
