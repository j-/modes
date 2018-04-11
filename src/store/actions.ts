import { Action, ActionCreator } from 'redux';

export interface ActionToggleFlag extends Action {
	type: 'ToggleFlag';
	data: {
		flag: number;
	};
}

export const isActionToggleFlag = (action: Action): action is ActionToggleFlag => (
	action.type === 'ToggleFlag'
);

export const toggleFlag: ActionCreator<ActionToggleFlag> = (flag: number) => ({
	type: 'ToggleFlag',
	data: {
		flag,
	},
});

export interface ActionSetOctalValue extends Action {
	type: 'SetOctalValue';
	data: {
		value: string;
	};
}

export const isActionSetOctalValue = (action: Action): action is ActionSetOctalValue => (
	action.type === 'SetOctalValue'
);

export const setOctalValue: ActionCreator<ActionSetOctalValue> = (value: string) => ({
	type: 'SetOctalValue',
	data: {
		value,
	},
});

export interface ActionSetDecimalValue extends Action {
	type: 'SetDecimalValue';
	data: {
		value: string;
	};
}

export const isActionSetDecimalValue = (action: Action): action is ActionSetDecimalValue => (
	action.type === 'SetDecimalValue'
);

export const setDecimalValue: ActionCreator<ActionSetDecimalValue> = (value: string) => ({
	type: 'SetDecimalValue',
	data: {
		value,
	},
});

export interface ActionCommitInputValues extends Action {
	type: 'CommitInputValues';
}

export const isActionCommitInputValues = (action: Action): action is ActionCommitInputValues => (
	action.type === 'CommitInputValues'
);

export const commitInputValues: ActionCreator<ActionCommitInputValues> = () => ({
	type: 'CommitInputValues',
});

export interface ActionToggleFlags extends Action {
	type: 'ToggleFlags';
	data: {
		showFlags: boolean;
	};
}

export const isActionToggleFlags = (action: Action): action is ActionToggleFlags => (
	action.type === 'ToggleFlags'
);

export const toggleFlags: ActionCreator<ActionToggleFlags> = (showFlags: boolean) => ({
	type: 'ToggleFlags',
	data: {
		showFlags,
	},
});

export interface ActionSetFileType extends Action {
	type: 'SetFileType';
	data: {
		type: number;
	};
}

export const isActionSetFileType = (action: Action): action is ActionSetFileType => (
	action.type === 'SetFileType'
);

export const setFileType: ActionCreator<ActionSetFileType> = (type: number) => ({
	type: 'SetFileType',
	data: {
		type,
	},
});
