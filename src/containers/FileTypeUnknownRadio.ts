import { connect } from 'react-redux';
import InputGroup, { InputGroupProps } from '../components/InputGroup';
import { ReducerState, isFileTypeKnown } from '../store';
import { clearFileType, ActionSetFileType } from '../store/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ReducerState): InputGroupProps => ({
	type: 'radio',
	checked: !isFileTypeKnown(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionSetFileType>): InputGroupProps => ({
	onChange: () => dispatch(clearFileType()),
});

export default connect<InputGroupProps, InputGroupProps, InputGroupProps>(
	mapStateToProps,
	mapDispatchToProps,
)(InputGroup);
