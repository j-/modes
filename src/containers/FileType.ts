import { connect } from 'react-redux';
import FileType from '../components/FileType';
import { ReducerState, getModeNumber } from '../store';

interface StateProps {
	mode: number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	mode: getModeNumber(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(FileType);
