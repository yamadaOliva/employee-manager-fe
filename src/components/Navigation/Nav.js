import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
export default function Nav(props) {
    return (
            <div>
                <div class="topnav">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/project">project</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </div>
    );
}