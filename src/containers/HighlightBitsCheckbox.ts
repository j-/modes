import { connect } from 'react-redux';
import Checkbox from '../components/Checkbox';
import { ReducerState, isHighlightingBits } from '../store';
import { toggleHighlight, ActionToggleHighlight } from '../store/actions';
import { Dispatch } from 'redux';

interface StateProps {
	checked: boolean;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	checked: isHighlightingBits(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionToggleHighlight>): DispatchProps => ({
	onChange: (e) => dispatch(
		toggleHighlight(e.currentTarget.checked)
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
