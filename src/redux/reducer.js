import { ADD_TASK, UPDATE_TASK, DELETE_TASK, DELETE_ALL, TASK_COMPLETED } from "./action";

const INITAL_STATE = {
    list: JSON.parse(localStorage.getItem('tasks')) || [],
};

// Main Logics of add, update, delete in reducer 
const TaskReducer = (state = INITAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK:
            let lastTask = state.list[state.list.length - 1]
            const newTask = {
                id: lastTask ? lastTask.id + 1 : 0,
                ...payload,
                time: new Date().toDateString(),
                completed: false
            }
            return {
                ...state,
                list: [...state.list, newTask]
            }
        case UPDATE_TASK:
            let updatedTaskList = state.list.map((_Task) => {
                return payload.id === _Task.id ? { ...payload } : _Task;
            });
            return {
                ...state,
                list: updatedTaskList,
            }
        case DELETE_TASK:
            const newTaskList = state.list.filter((task) => {
                return task.id !== payload
            });
            return {
                ...state,
                list: newTaskList,
            }
        case DELETE_ALL:
            return {
                ...state,
                list: [],
            }
        case TASK_COMPLETED:
            const modTaskList = state.list.map((task) => {
                return task.id === payload ? {
                    ...task,
                    completed: true
                } : task;
            })
            return {
                ...state,
                list: modTaskList
            }
        default:
            return state;
    }
}

export default TaskReducer;