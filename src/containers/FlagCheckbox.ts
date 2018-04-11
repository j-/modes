import { connect } from 'react-redux';
import InputGroup, { InputGroupProps } from '../components/InputGroup';
import { ReducerState, getModeNumber, getHighlightedFlag } from '../store';
import { toggleFlag, ActionToggleFlag, highlightFlag, ActionHighlightFlag } from '../store/actions';
import { Dispatch } from 'redux';

interface OwnProps extends InputGroupProps {
	flag: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): InputGroupProps => {
	const { flag } = props;
	const mode = getModeNumber(state);
	const highlighted = getHighlightedFlag(state);
	return {
		type: 'checkbox',
		checked: (mode & flag) === flag,
		highlightExact: highlighted === null ? false : (highlighted & flag) === flag,
		highlightPartial: highlighted === null ? false : (highlighted & flag) > 0,
	};
};

const mapDispatchToProps = (
	dispatch: Dispatch<ActionToggleFlag | ActionHighlightFlag>,
	props: OwnProps,
): InputGroupProps => ({
	onChange: () => dispatch(toggleFlag(props.flag)),
	onMouseOver: () => dispatch(highlightFlag(props.flag)),
	onMouseOut: () => dispatch(highlightFlag(null)),
});

export default connect<InputGroupProps, InputGroupProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(InputGroup);
