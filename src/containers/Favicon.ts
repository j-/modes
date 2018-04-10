import { connect } from 'react-redux';
import Favicon from '../components/Favicon';
import { ReducerState, getModeNumber } from '../store';

interface StateProps {
	mode: number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	mode: getModeNumber(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(Favicon);
