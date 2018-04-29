import { Store } from 'redux';
import * as leftPad from 'left-pad';
import { ReducerState, getModeNumber } from './store';
import { setDecimalValue } from './store/actions';

export default (store: Store<ReducerState>) => {
	let lastMode: number;

	const getStoreMode = () => (
		getModeNumber(store.getState())
	);

	const getHashMode = () => {
		const { hash } = location;
		const oct = parseInt(hash.substring(1), 8);
		return isNaN(oct) ? null : oct;
	};

	const setStoreMode = (mode: number) => {
		store.dispatch(setDecimalValue(mode));
	};

	const setHashMode = (mode: number) => {
		const shouldReplace = location.hash === '';
		const hash = '#' + leftPad(mode.toString(8), 4, '0');
		if (shouldReplace) {
			location.replace(hash);
		} else {
			location.assign(hash);
		}
	};

	store.subscribe(() => {
		const mode = getStoreMode();
		if (mode !== lastMode) {
			lastMode = mode;
			setHashMode(mode);
		}
	});

	window.addEventListener('hashchange', () => {
		const mode = getHashMode();
		if (mode && mode !== lastMode) {
			lastMode = mode;
			setStoreMode(mode);
		}
	});

	const storeMode = getStoreMode();
	const hashMode = getHashMode();
	if (hashMode === null) {
		// Hash does not have a value.
		// Update hash with store mode.
		setHashMode(storeMode);
	} else if (hashMode !== storeMode) {
		// Hash and store modes differ.
		// Update store with hash mode.
		setStoreMode(hashMode);
	} else {
		// Hash mode and store mode match.
		// Nothing to do.
	}
};
