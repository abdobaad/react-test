import React, { useContext } from 'react';
import {Link, useLocation} from "react-router-dom";
import { AppContext } from "../../Context";

import "./index.css";

const Header = () => {
    const { isAuth,LgoutUser } = useContext(AppContext);
    
    let {pathname} = useLocation();
    
    return (
        <header>
            <div className="header_container container">
                  <span className="header--logo">LOGO</span>
                  <div className="header--authencation">
                        <Link className={`header--link home_button ${pathname === '/' && "active_link"}`} to="/">Home</Link>
                        {
                            isAuth
                            ?
                            <>
                                <Link className={`header--link home_button ${pathname === '/posts' && "active_link"}`} to="/posts">Posts</Link>
                                <button onClick={()=> LgoutUser()} className="header--btn login_button">Logout</button>
                            </>
                            :
                            <Link to="/login" className="header--btn login_button">Login</Link>
                        }
                  </div>
            </div>
        </header>
    );
};

export default Header;