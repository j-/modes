import { connect } from 'react-redux';
import PermissionsSymbolic from '../components/PermissionsSymbolic';
import { ReducerState } from '../store';

interface StateProps {
	showFlag: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: false,
});

export default connect<StateProps>(
	mapStateToProps,
)(PermissionsSymbolic);
