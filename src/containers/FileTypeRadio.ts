import { connect } from 'react-redux';
import InputGroup, { InputGroupProps } from '../components/InputGroup';
import { ReducerState, getFileType } from '../store';
import { setFileType, ActionSetFileType } from '../store/actions';
import { Dispatch } from 'redux';

interface OwnProps extends InputGroupProps {
	flag: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): InputGroupProps => ({
	type: 'radio',
	checked: getFileType(state) === props.flag,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionSetFileType>, props: OwnProps): InputGroupProps => ({
	onChange: () => dispatch(setFileType(props.flag)),
});

export default connect<InputGroupProps, InputGroupProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(InputGroup);
