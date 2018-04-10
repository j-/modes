import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import TextInput, { TextInputProps as OwnProps } from '../components/TextInput';
import { ReducerState, getOctalInputValue } from '../store';
import { setOctalValue } from '../store/actions';

interface StateProps {
	value?: string | string[] | number;
	type?: string;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getOctalInputValue(state),
	type: 'number',
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
