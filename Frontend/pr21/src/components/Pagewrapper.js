import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/img/21_logo.png'
class PageWrapper extends Component {
    render() {
        return (
            <div>
                <header >
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                        <img className="logo"src={logo} alt="logo"/>
                            <Link className="navbar-brand" id="menuicon" to="/">P21</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/#section2">Create Project</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/#section4">About</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/#section7">All Projects</Link>
                                    </li>
                                </ul>
                                {/* <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form> */}
                            </div>
                        </div>
                    </nav>

                </header>
                <button id="topButton" title="Go to top" >➤</button>
                {this.props.children}

                <footer className=" text-light py-3 footer">
                    <p className="text-center">
                        Copyright &copy; <a href="https://curl.tech/" >Curl Tech</a> 2021
            </p>
                </footer>

            </div>

        );
    }
}
export default PageWrapper;