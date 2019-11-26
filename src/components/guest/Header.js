import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ backgroundColor: "#565656", padding: "1px" }}>
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
              border: "solid #a9a9a9",
              padding: "5px",
              backgroundColor: "#a9a9a9",
              color: "#000000"
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
              border: "solid #a9a9a9",
              padding: "5px",
              backgroundColor: "#a9a9a9",
              color: "#000000"
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
              border: "solid #a9a9a9",
              padding: "5px",
              backgroundColor: "#a9a9a9",
              color: "#000000"
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
              border: "solid #a9a9a9",
              padding: "5px",
              backgroundColor: "#a9a9a9",
              color: "#000000"
            }}
          >
            Users
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              border: "solid #a9a9a9",
              padding: "5px",
              backgroundColor: "#a9a9a9",
              color: "#000000"
            }}
          >
            Sign In
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              border: "solid #a9a9a9",
              padding: "5px",
              backgroundColor: "#a9a9a9",
              color: "#000000"
            }}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
