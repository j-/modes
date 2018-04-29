import { connect } from 'react-redux';
import BinaryFlagLabel from '../components/BinaryFlagLabel';
import { ReducerState, getHighlightedFlag } from '../store';

interface StateProps {
	highlightedFlag: number | null;
}

interface OwnProps {
	flag: number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	highlightedFlag: getHighlightedFlag(state),
});

export default connect<StateProps, void, OwnProps>(
	mapStateToProps,
)(BinaryFlagLabel);
