import { connect } from 'react-redux';
import FileTypes from '../components/FileTypes';
import { ReducerState, isShowingFlags } from '../store';

interface StateProps {
	showFlag: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: isShowingFlags(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(FileTypes);
