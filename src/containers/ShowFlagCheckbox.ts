import { connect } from 'react-redux';
import Checkbox from '../components/Checkbox';
import { ReducerState, isShowingFlags } from '../store';
import { toggleFlags, ActionToggleFlags } from '../store/actions';
import { Dispatch } from 'redux';

interface StateProps {
	checked: boolean;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	checked: isShowingFlags(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionToggleFlags>): DispatchProps => ({
	onChange: (e) => dispatch(
		toggleFlags(e.currentTarget.checked)
	),
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => ({
	...stateProps,
	...dispatchProps,
});

export default connect<StateProps, DispatchProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Checkbox);
