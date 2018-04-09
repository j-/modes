import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { ReducerState, getSymbolString } from '../store';

interface StateProps {
	value?: string | string[] | number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getSymbolString(state),
});

export default connect<StateProps>(
	mapStateToProps,
)(TextInput);
