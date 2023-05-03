import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { logoutService } from "../../services/UsersService";
export default function Nav(props) {
  const { user,logout } = useContext(UserContext);
  console.log("test context==>", user.account.email);
  const history = useHistory();
  const handleLogout = async () => {
    const res = await logoutService();
    console.log(res);
    logout();
    toast.success("Logout success");
    history.push("/login");
  };

  return (
    <div>
      <div class="topnav d-flex">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/project">project</NavLink>
        <NavLink to="/about">About</NavLink>

        <div className="text-light mt-3 ml-5">Hello {user.account.email}</div>
        <button to="/login" className="text-light btn btn-danger my-2 mx-5"
            onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
