import { connect } from 'react-redux';
import Radio from '../components/Radio';
import { ReducerState, getFileType } from '../store';
import { setFileType, ActionSetFileType } from '../store/actions';
import { Dispatch } from 'redux';

interface StateProps {
	checked: boolean;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface OwnProps {
	flag: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	checked: getFileType(state) === props.flag,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionSetFileType>, props: OwnProps): DispatchProps => ({
	onChange: () => dispatch(setFileType(props.flag)),
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => ({
	...stateProps,
	...dispatchProps,
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Radio);
