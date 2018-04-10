import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { ReducerState, getModeStringOctal } from '../store';

interface StateProps {
	value?: string | string[] | number;
	type?: string;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getModeStringOctal(state),
	type: 'number',
});

export default connect<StateProps>(
	mapStateToProps,
)(TextInput);
