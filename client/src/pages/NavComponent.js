import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <nav className='navbar'>
                <h1>Books</h1>
                <Link className='addbtn' to="/add">Add new book</Link>
            </nav>
        )
    }
}

export default Nav;