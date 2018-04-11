import { connect } from 'react-redux';
import * as classNames from 'classnames';
import TextInput from '../components/TextInput';
import { ReducerState, getSymbolString } from '../store';

interface StateProps {
	value?: string | string[] | number;
	type?: string;
	className?: string;
	readOnly?: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getSymbolString(state),
	type: 'string',
	className: classNames('ModeInput', {
		'ModeInput--is-invalid': false,
		'ModeInput--is-editing': false,
	}),
	readOnly: true,
});

const mapDispatchToProps = () => ({});

export default connect<StateProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
