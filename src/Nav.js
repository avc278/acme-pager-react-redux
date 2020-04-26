import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadEmployees } from './actions';
import { RESULTS_PER_PAGE } from './constants';


const Nav = ({ location, employees }) => {
    const numPagesArr = [];
    let prev, next, currPage;
    if (employees.count) {
        const numPages = Math.ceil( employees.count / RESULTS_PER_PAGE );
        for (let i=0; i<numPages; i++) numPagesArr.push(i)
        currPage = +location.pathname.slice(1);
        prev = ( currPage !== 0 ? currPage - 1 : 0)
        next = ( currPage !== numPages - 1 ? currPage + 1 : numPages - 1)
    }
    return (
        <nav className='page-nav'>
            {prev !== undefined && <Link to={`${prev}`}>Prev</Link> }
            {numPagesArr && numPagesArr.map( page => {
                return (
                    <Link to={`${page}`} className={currPage === page ? 'active-page-link' : ''}>
                        {page + 1}
                    </Link>
                )}
            )}
            {next && <Link to={`${next}`}>Next</Link> }
        </nav>
    );
};

const mapStateToProps = ({ employees }) => {
    return {
        employees
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (pageNum) => {
            dispatch(loadEmployees(pageNum));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
