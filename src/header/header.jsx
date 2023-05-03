import React, { Component } from "react"
import { Link, NavLink, Outlet} from "react-router-dom";

export default class Header extends Component {

    render () {
        return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Деканат</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                aria-current="page" to="/">Студенты</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
        );
    }    
}