import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from '../containers/categories/Index';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category">Category</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    {/*<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                        {/*Dropdown*/}
                                    {/*</a>*/}
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {/*<a className="dropdown-item" href="#">Action</a>*/}
                                        {/*<a className="dropdown-item" href="#">Another action</a>*/}
                                        {/*<div className="dropdown-divider" />*/}
                                        {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/category' component={Category}/>
                </div>
            </Router>

        );
    }
}
