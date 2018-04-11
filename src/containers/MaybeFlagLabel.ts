import { connect } from 'react-redux';
import MaybeFlagLabel from '../components/MaybeFlagLabel';
import { ReducerState, isShowingFlags } from '../store';

interface StateProps {
	showFlag: boolean;
}

interface OwnProps {
	name: string;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: isShowingFlags(state),
});

export default connect<StateProps, void, OwnProps>(
	mapStateToProps,
)(MaybeFlagLabel);
