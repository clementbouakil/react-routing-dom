import React from "react";
import logo from "./logo.svg";
import "./Header.css";

function Header() {
	return (
		<header className="Header-header">
			<img src={logo} className="Header-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="Header-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	);
}

export default Header;
