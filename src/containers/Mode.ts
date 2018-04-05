import { connect } from 'react-redux';
import Mode from '../components/Mode';
import { ReducerState, getModeNumber } from '../store';

interface StateProps {
	value: number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getModeNumber(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(Mode);
