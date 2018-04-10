import { connect } from 'react-redux';
import Checkbox from '../components/Checkbox';
import { ReducerState, getModeNumber } from '../store';
import { toggleFlag, ActionToggleFlag } from '../store/actions';
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
	checked: (getModeNumber(state) & props.flag) === props.flag,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionToggleFlag>, props: OwnProps): DispatchProps => ({
	onChange: () => dispatch(toggleFlag(props.flag)),
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => ({
	...stateProps,
	...dispatchProps,
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Checkbox);
