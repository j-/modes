import { Reducer } from 'redux';
import { isActionToggleFlag } from './actions';
import { formatSymbolicString } from './symbolic';

export interface ReducerState {
	mode: number;
}

const DEFAULT_STATE: ReducerState = {
	mode: 0o755,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionToggleFlag(action)) {
		const { mode } = state;
		const { flag } = action.data;
		const isset = (mode & flag) === flag;
		return {
			...state,
			mode: isset ?
				// Clear bits
				mode & ~flag :
				// Set bits
				mode | flag,
		};
	}

	return state;
};

export default reducer;

export const getModeNumber = (state: ReducerState): number => state.mode;

export const getModeStringDecimal = (state: ReducerState): string => state.mode.toString(10);

export const getModeStringOctal = (state: ReducerState): string => state.mode.toString(8).padStart(4, '0');

export const getModeStringBinary = (state: ReducerState): string => state.mode.toString(2);

export const getSymbolString = (state: ReducerState): string => formatSymbolicString(state.mode);
