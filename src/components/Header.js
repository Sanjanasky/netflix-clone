
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/Login');
    };

    return (
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="nav__logo" src="logo.png" alt="" />
                    </Link>

                    <div className="navbar">
                        <form className="d-flex" role="search">
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <button className="btn btn-danger" onClick={clickHandler}>Signin</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;



