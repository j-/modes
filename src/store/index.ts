import { Reducer } from 'redux';
import { formatSymbolicString, parseSymbolicString } from './symbolic';

import {
	isActionToggleFlag,
	isActionSetOctalValue,
	isActionSetDecimalValue,
	isActionSetSymbolicValue,
	isActionCommitInputValues,
	isActionToggleFlags,
	isActionSetFileType,
	isActionHighlightFlag,
	isActionToggleHighlight,
} from './actions';

import {
	S_IFMT,
	S_IFSOCK,
	S_IFLNK,
	S_IFREG,
	S_IFCHR,
	S_IFIFO,
	S_IFBLK,
	S_IFDIR,
} from '../stat';

export interface ReducerState {
	mode: number;
	showFlags: boolean;
	octalValue: string | null;
	decimalValue: string | null;
	symbolicValue: string | null;
	highlightBits: boolean;
	highlightedFlag: number | null;
}

const DEFAULT_STATE: ReducerState = {
	mode: 0o755,
	showFlags: false,
	octalValue: null,
	decimalValue: null,
	symbolicValue: null,
	highlightBits: false,
	highlightedFlag: null,
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
			symbolicValue: null,
		};
	}

	if (isActionSetOctalValue(action)) {
		const { value } = action.data;
		const parsed = parseInt(value, 8);
		const mode = value === '' ? 0 : isNaN(parsed) ? state.mode : parsed;
		return {
			...state,
			mode,
			octalValue: value,
			decimalValue: null,
			symbolicValue: null,
		};
	}

	if (isActionSetDecimalValue(action)) {
		const { value } = action.data;
		const parsed = parseInt(value, 10);
		const mode = value === '' ? 0 : isNaN(parsed) ? state.mode : parsed;
		return {
			...state,
			mode,
			octalValue: null,
			decimalValue: value,
			symbolicValue: null,
		};
	}

	if (isActionSetSymbolicValue(action)) {
		const { value } = action.data;
		const parsed = parseSymbolicString(value);
		const mode = value === '' ? 0 : parsed === null ? state.mode : parsed;
		return {
			...state,
			mode,
			octalValue: null,
			decimalValue: null,
			symbolicValue: value,
		};
	}

	if (isActionCommitInputValues(action)) {
		return {
			...state,
			octalValue: null,
			decimalValue: null,
			symbolicValue: null,
		};
	}

	if (isActionToggleFlags(action)) {
		return {
			...state,
			showFlags: action.data.showFlags,
		};
	}

	if (isActionSetFileType(action)) {
		const { mode } = state;
		const { type } = action.data;
		return {
			...state,
			mode: mode & ~S_IFMT | type,
		};
	}

	if (isActionHighlightFlag(action)) {
		return {
			...state,
			highlightedFlag: action.data.flag,
		};
	}

	if (isActionToggleHighlight(action)) {
		return {
			...state,
			highlightBits: action.data.highlightBits,
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

export const isOctalInputEditing = (state: ReducerState): boolean => (
	state.octalValue !== null
);

export const getOctalInputValue = (state: ReducerState): string => (
	isOctalInputEditing(state) ?
		getOctalRawValue(state) as string :
		getModeStringOctal(state)
);

export const isOctalInputValid = (state: ReducerState): boolean => (
	state.octalValue === null || state.octalValue === '' || !isNaN(parseInt(state.octalValue, 8))
);

export const getDecimalRawValue = (state: ReducerState): string | null => (
	state.decimalValue
);

export const isDecimalInputEditing = (state: ReducerState): boolean => (
	state.decimalValue !== null
);

export const getDecimalInputValue = (state: ReducerState): string => (
	isDecimalInputEditing(state) ?
		getDecimalRawValue(state) as string :
		getModeStringDecimal(state)
);

export const isDecimalInputValid = (state: ReducerState): boolean => (
	state.decimalValue === null || state.decimalValue === '' || !isNaN(parseInt(state.decimalValue, 10))
);

export const getSymbolicRawValue = (state: ReducerState): string | null => (
	state.symbolicValue
);

export const isSymbolicInputEditing = (state: ReducerState): boolean => (
	state.symbolicValue !== null
);

export const getSymbolicInputValue = (state: ReducerState): string => (
	isSymbolicInputEditing(state) ?
		getSymbolicRawValue(state) as string :
		getSymbolString(state)
);

export const isSymbolicInputValid = (state: ReducerState): boolean => (
	state.symbolicValue === null || state.symbolicValue === '' || parseSymbolicString(state.symbolicValue) !== null
);

export const isShowingFlags = (state: ReducerState): boolean => (
	state.showFlags
);

export const getFileType = (state: ReducerState): number => (
	getModeNumber(state) & S_IFMT
);

export const isFileTypeKnown = (state: ReducerState): boolean => {
	switch (getFileType(state)) {
		case S_IFSOCK:
		case S_IFLNK:
		case S_IFREG:
		case S_IFBLK:
		case S_IFDIR:
		case S_IFCHR:
		case S_IFIFO:
			return true;
		default:
			return false;
	}
};

export const isHighlightingBits = (state: ReducerState): boolean => (
	state.highlightBits
);

export const getHighlightedFlag = (state: ReducerState): number | null => (
	isHighlightingBits(state) ?
		state.highlightedFlag :
		null
);
