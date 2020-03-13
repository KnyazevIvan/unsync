import React from "react";
import { NavLink } from "react-router-dom";


function Nav () {

    return (
        <div className='navbar-fixed'>


<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo right">Logo</a>
      <ul class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li  activeClassName="active"><NavLink to='/todo' >Todo</NavLink></li>
        <li activeClassName="active" ><NavLink  to= '/Calendar'>Calendar</NavLink></li>
      </ul>
    </div>
  </nav>
        








{/* 
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">Logo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to='/todo' >Todo</NavLink></li>
                        <li><NavLink to= '/Calendar'>Calendar</NavLink></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav> */}

        </div>
    )
}

export default Nav
