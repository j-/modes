import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import TextInput, { TextInputProps as OwnProps } from '../components/TextInput';
import { ReducerState, getModeNumber } from '../store';
import { setDecimalValue } from '../store/actions';

interface StateProps {
	value?: string | string[] | number;
	type?: string;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getModeNumber(state),
	type: 'number',
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
	onChange: (e) => dispatch(
		setDecimalValue(e.currentTarget.value)
	),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
