import { createStore } from './redux';
import reducer from './reducer';
//holds current state over time  and recieve actions
export default function makeStore() {
	return createStore(reducer);
}
