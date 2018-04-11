import { connect } from 'react-redux';
import PermissionsSymbolic from '../components/PermissionsSymbolic';
import { ReducerState, isShowingFlags } from '../store';

interface StateProps {
	showFlag: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: isShowingFlags(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(PermissionsSymbolic);
