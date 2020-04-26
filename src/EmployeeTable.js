import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEmployees } from './actions';


class EmployeesTable extends Component {
    constructor() {
        super();
    }
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const pageNum = this.props.location.pathname.slice(1)
            this.props.load(pageNum)
        }
    };
    render() {
        const { employees } = this.props;
        return (
            <div className='employee-table-container'>
                <table className="employee-table">
                    <thead><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Title</th></tr></thead>
                    <tbody>
                        {employees ? employees.map( employee => {
                            return (
                                <tr>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.title}</td>
                                </tr>
                            )
                        }) : ''}
                    </tbody>
                </table>
            </div>
        );    
    };
};

const mapStateToProps = ({ employees }) => {
    return {
        employees: employees.rows
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (pageNum) => {
            dispatch(loadEmployees(pageNum));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTable);
