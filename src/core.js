//sets entries key in the state Mapand set the value as the given List of entries
import { List, Map } from 'immutable';

export function setEntries(state, entries) {
	return state.set('entries', List(entries));
}
//this function takes in thee old state and merges with the new set of entries
export function next(state) {
	const entries = state.get('entries');
	return state.merge({
		vote: Map({ pair: entries.take(2) }),
		entries: entries.skip(2)
	});
}

export function vote(state, entry) {
	return state.updateIn([ 'vote', 'tally', entry ], 0, (tally) => tally + 1);
}
