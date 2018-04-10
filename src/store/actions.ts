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
