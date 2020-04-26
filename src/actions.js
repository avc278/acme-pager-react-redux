import axios from 'axios';
import { LOAD_EMPLOYEES } from './action_types';


const _loadEmployees = employees => {
    return {
        type: LOAD_EMPLOYEES,
        employees
    };
};

const loadEmployees = (pageNum) => {
    return async(dispatch) => {
        const employees = (await axios.get(`/api/employees/${pageNum}`)).data;
        dispatch(_loadEmployees(employees))
    }
};

export {
    loadEmployees,
};
