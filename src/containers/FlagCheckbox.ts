import { connect } from 'react-redux';
import InputGroup, { InputGroupProps } from '../components/InputGroup';
import { ReducerState, getModeNumber } from '../store';
import { toggleFlag, ActionToggleFlag } from '../store/actions';
import { Dispatch } from 'redux';

interface OwnProps extends InputGroupProps {
	flag: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): InputGroupProps => ({
	type: 'checkbox',
	checked: (getModeNumber(state) & props.flag) === props.flag,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionToggleFlag>, props: OwnProps): InputGroupProps => ({
	onChange: () => dispatch(toggleFlag(props.flag)),
});

export default connect<InputGroupProps, InputGroupProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(InputGroup);
