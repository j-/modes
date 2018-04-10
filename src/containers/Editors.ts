import { connect } from 'react-redux';
import Editors from '../components/Editors';
import { ReducerState } from '../store';

interface StateProps {
	showFlag: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	showFlag: false,
});

export default connect<StateProps>(
	mapStateToProps,
)(Editors);
