import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/category">Listing</Link>
                        <Link to="/category/add">Add</Link>
                        <Route exact path="/category" component={Listing}></Route>
                        <Route exact path="/category/add" component={Add}></Route>
                        <Route exact path="/category/edit/:id" component={Edit}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}
