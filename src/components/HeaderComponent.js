import React, { Component } from 'react';
import "./Component.css"

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand title">EMPLOYEE DATABASE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">LOGIN</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">ABOUT US</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        );
    }
}

export default HeaderComponent;