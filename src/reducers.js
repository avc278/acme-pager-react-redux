import { combineReducers } from 'redux';
import { LOAD_EMPLOYEES } from './action_types';

const employeesReducer = (state = [], action) => {
    if (action.type === LOAD_EMPLOYEES) {
        return action.employees;
    }
    return state;
}

export const reducer = combineReducers({
    employees: employeesReducer,
});
