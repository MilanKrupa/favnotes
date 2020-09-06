import { createStore } from 'redux';
import notesApp from 'reducers';

const Store = createStore(notesApp);

export default Store;
