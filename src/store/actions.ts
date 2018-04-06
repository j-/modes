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
