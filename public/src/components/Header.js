import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';



export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to='/' className="navbar-brand">Project Counter</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><IndexLink to='/about' activeClassName="active">About</IndexLink></li>
                        </ul>


                    </div>
                </div>
            </nav>
        );
    }
}