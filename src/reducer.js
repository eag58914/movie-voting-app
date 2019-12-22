import { setEntries, next, vote } from './core';

export default function reducer(state, action) {
	switch (action.type) {
		case 'SET ENTRIES':
			return setEntries(state, action.entries);
		case 'NEXT':
			return next(state);
		case 'VOTE':
			return vote(state, action.entry);
	}
	return state;
}
