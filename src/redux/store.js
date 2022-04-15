import { createStore } from 'redux';
import TaskReducer from './reducer'
// Our store from where we can fetch value or state
const store = createStore(TaskReducer);

export default store;