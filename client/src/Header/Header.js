import React, { Component } from 'react'
import icon from '../img/icon.png';
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert';



class Header extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

        this.logOut = this.logOut.bind(this)
    }
    logOut() {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to logout?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              window.location.href = "/";
            } else {
                window.location.href = "/Home";
            }
          });
    };
    render() {
        return (
            <React.StrictMode>
                <nav
                    className="navbar is-light"
                    role="navigation"
                    aria-label="main navigation"
                >
                    <div className="container">
                        <div className="navbar-brand">
                            <img src={icon} alt="IDIORR LOGO" width="150px" height="1.75rem" />
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <NavLink to="/Home" className="navbar-item" activeClassName="is-active">หน้าแรก</NavLink>
                                <NavLink to="/Menu" className="navbar-item" activeClassName="is-active">เมนูอาหาร</NavLink>
                                <NavLink to="/Contact" className="navbar-item" activeClassName="is-active">ติดต่อ</NavLink>
                                <NavLink exact to="/Logout" className="navbar-item" activeClassName="is-active" onClick={this.logOut}>ลงชื่อออก</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.StrictMode >)
    }
}

export default Header