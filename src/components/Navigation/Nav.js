import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
export default function Nav(props) {
    return (
            <div>
                <div class="topnav">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </div>
    );
}