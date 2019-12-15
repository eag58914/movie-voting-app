//sets entries key in the state Mapand set the value as the given List of entries
export function setEntries(state, entries) {
	return state.set('entries', entries);
}
