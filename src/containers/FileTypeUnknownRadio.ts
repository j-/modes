import { connect } from 'react-redux';
import Radio, { RadioProps as OwnProps } from '../components/Radio';
import { ReducerState, isFileTypeKnown } from '../store';
import { setFileType, ActionSetFileType } from '../store/actions';
import { Dispatch } from 'redux';

interface StateProps {
	checked: boolean;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	checked: !isFileTypeKnown(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionSetFileType>): DispatchProps => ({
	onChange: () => dispatch(setFileType(0)),
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps): OwnProps => ({
	...stateProps,
	...dispatchProps,
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Radio);
