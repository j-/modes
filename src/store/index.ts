import { Reducer } from 'redux';

export interface ReducerState {
	mode: number;
}

const DEFAULT_STATE: ReducerState = {
	mode: 0o777,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	return state;
};

export default reducer;

export const getModeNumber = (state: ReducerState): number => state.mode;

export const getModeStringDecimal = (state: ReducerState): string => state.mode.toString(10);

export const getModeStringOctal = (state: ReducerState): string => '0' + state.mode.toString(8);

export const getModeStringBinary = (state: ReducerState): string => state.mode.toString(2);
