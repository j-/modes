import { connect } from 'react-redux';
import PermissionsGrid from '../components/PermissionsGrid';
import { ReducerState, isShowingFlags } from '../store';

interface StateProps {
	showFlag: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: isShowingFlags(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(PermissionsGrid);
