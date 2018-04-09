import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { ReducerState, getModeNumber } from '../store';

interface StateProps {
	value?: string | string[] | number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getModeNumber(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(TextInput);
