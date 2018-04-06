import { connect } from 'react-redux';
import PermissionsGrid from '../components/PermissionsGrid';
import { ReducerState } from '../store';

interface StateProps {
	showFlag: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: false,
});

export default connect<StateProps>(
	mapStateToProps,
)(PermissionsGrid);
