import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as classNames from 'classnames';
import TextInput, { TextInputProps as OwnProps } from '../components/TextInput';
import { setOctalValue } from '../store/actions';
import './ModeInput.css';

import {
	ReducerState,
	getOctalInputValue,
	isOctalInputValid,
	isOctalInputEditing,
} from '../store';

interface StateProps {
	value?: string | string[] | number;
	type?: string;
	className?: string;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getOctalInputValue(state),
	type: 'number',
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': !isOctalInputValid(state),
		'ModeInput--is-editing': isOctalInputEditing(state),
	}),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
	onChange: (e) => dispatch(
		setOctalValue(e.currentTarget.value)
	),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
