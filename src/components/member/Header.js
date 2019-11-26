import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  const logOut = () => {
    localStorage.removeItem("isLogin");

    props.history.push("/signin");
  };
  return (
    <nav style={{ backgroundColor: "#a9a9a9", padding: "1px" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyleType: "none"
        }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              border: "solid ##565656",
              padding: "5px",
              backgroundColor: "#565656",
              color: "#ffffff"
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              border: "solid ##565656",
              padding: "5px",
              backgroundColor: "#565656",
              color: "#ffffff"
            }}
          >
            About
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              border: "solid ##565656",
              padding: "5px",
              backgroundColor: "#565656",
              color: "#ffffff"
            }}
          >
            Contact
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/users"
            style={{
              textDecoration: "none",
              border: "solid ##565656",
              padding: "5px",
              backgroundColor: "#565656",
              color: "#ffffff"
            }}
          >
            Users
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a
            href="#/"
            onClick={logOut}
            style={{
              textDecoration: "none",
              border: "solid ##565656",
              padding: "5px",
              backgroundColor: "#565656",
              color: "#ffffff"
            }}
          >
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(Header);
