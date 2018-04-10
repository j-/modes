import { Reducer } from 'redux';
import { isActionToggleFlag, isActionSetOctalValue, isActionSetDecimalValue } from './actions';
import { formatSymbolicString } from './symbolic';

export interface ReducerState {
	mode: number;
	octalValue: string | null;
	decimalValue: string | null;
}

const DEFAULT_STATE: ReducerState = {
	mode: 0o755,
	octalValue: null,
	decimalValue: null,
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
			octalValue: null,
			decimalValue: null,
		};
	}

	if (isActionSetOctalValue(action)) {
		const { value } = action.data;
		const parsed = parseInt(value, 8);
		const mode = isNaN(parsed) ? state.mode : parsed;
		return {
			...state,
			mode,
			octalValue: value,
			decimalValue: null,
		};
	}

	if (isActionSetDecimalValue(action)) {
		const { value } = action.data;
		const parsed = parseInt(value, 10);
		const mode = isNaN(parsed) ? state.mode : parsed;
		return {
			...state,
			mode,
			octalValue: null,
			decimalValue: value,
		};
	}

	return state;
};

export default reducer;

export const getModeNumber = (state: ReducerState): number => (
	state.mode
);

export const getModeStringDecimal = (state: ReducerState): string => (
	state.mode.toString(10)
);

export const getModeStringOctal = (state: ReducerState): string => (
	state.mode.toString(8).padStart(4, '0')
);

export const getModeStringBinary = (state: ReducerState): string => (
	state.mode.toString(2)
);

export const getSymbolString = (state: ReducerState): string => (
	formatSymbolicString(state.mode)
);

export const getOctalRawValue = (state: ReducerState): string | null => (
	state.octalValue
);

export const getOctalInputValue = (state: ReducerState): string => (
	getOctalRawValue(state) || getModeStringOctal(state)
);

export const isOctalInputEditing = (state: ReducerState): boolean => (
	state.octalValue !== null
);

export const isOctalInputValid = (state: ReducerState): boolean => (
	state.octalValue === null || !isNaN(parseInt(state.octalValue, 8))
);

export const getDecimalRawValue = (state: ReducerState): string | null => (
	state.decimalValue
);

export const getDecimalInputValue = (state: ReducerState): string => (
	getDecimalRawValue(state) || getModeStringDecimal(state)
);

export const isDecimalInputEditing = (state: ReducerState): boolean => (
	state.decimalValue !== null
);

export const isDecimalInputValid = (state: ReducerState): boolean => (
	state.decimalValue === null || !isNaN(parseInt(state.decimalValue, 10))
);
