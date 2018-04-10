import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { ReducerState, getSymbolString } from '../store';

interface StateProps {
	value?: string | string[] | number;
	type?: string;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getSymbolString(state),
	type: 'string',
});

export default connect<StateProps>(
	mapStateToProps,
)(TextInput);
