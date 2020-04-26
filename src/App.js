import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import EmployeesTable from './EmployeeTable';
import Nav from './Nav';
import { loadEmployees } from './actions';


class App extends Component {
    constructor() {
        super();
    };
    componentDidMount() {
        this.props.load();
    }
    render() {
        return (
            <div className='main-container'>
                <HashRouter>
                    <Route exact path='/' render={() => <Redirect to='0' />} />
                    <h1>ACME Pager</h1>
                    <Route component={ EmployeesTable } />
                    <Route component={ Nav } />
                </HashRouter>
            </div>
        );
    };
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(loadEmployees());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
