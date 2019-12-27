import { setEntries, next, vote, INITIAL_STATE } from './core';

export default function reducer(state, action) {
	switch (action.type) {
		case 'SET ENTRIES':
			return setEntries(state, action.entries);
		case 'NEXT':
			return next(state);
		case 'VOTE':
			return state.update('vote', (voteState) => vote(voteState, action.entry));
	}
	return state;
}
