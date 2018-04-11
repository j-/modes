import { connect } from 'react-redux';
import Editors from '../components/Editors';
import { ReducerState, isShowingFlags } from '../store';

interface StateProps {
	showFlag: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: isShowingFlags(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(Editors);
