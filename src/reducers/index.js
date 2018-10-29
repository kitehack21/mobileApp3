import {combineReducers} from 'redux';
import AuthReducer from './AuthReducers'
import EmployeeFormReducer from './EmployeeFormReducer'
import EmployeeListReducer from './EmployeeListReducer'

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeListReducer
})

