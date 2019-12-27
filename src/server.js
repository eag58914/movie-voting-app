import Server from 'socket.io';
import { store } from '..';

export default function startServer() {
	const io = new Server().attach(8090);
}
//connecting socket io to store to record actions
store.subscribe(() => io.emit('state', store.getState().toJS()));

// emit current state
io.on('connection', (socket) => {
	socket.emit('state', store.getState().toJS());
	socket.on('action', store.dispatch.bind(store));
});
