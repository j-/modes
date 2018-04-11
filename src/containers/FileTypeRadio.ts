import { connect } from 'react-redux';
import InputGroup, { InputGroupProps } from '../components/InputGroup';
import { ReducerState, getFileType, getHighlightedFlag } from '../store';
import { setFileType, ActionSetFileType, highlightFlag, ActionHighlightFlag } from '../store/actions';
import { Dispatch } from 'redux';

interface OwnProps extends InputGroupProps {
	flag: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): InputGroupProps => ({
	type: 'radio',
	checked: getFileType(state) === props.flag,
	highlightExact: getHighlightedFlag(state) === props.flag,
});

const mapDispatchToProps = (
	dispatch: Dispatch<ActionSetFileType | ActionHighlightFlag>,
	props: OwnProps,
): InputGroupProps => ({
	onChange: () => dispatch(setFileType(props.flag)),
	onMouseOver: () => dispatch(highlightFlag(props.flag)),
	onMouseOut: () => dispatch(highlightFlag(null)),
});

export default connect<InputGroupProps, InputGroupProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(InputGroup);
