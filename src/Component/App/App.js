import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import History from "../History/History";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<NavLink exact to="/">
							Accueil
						</NavLink>{" "}
						<NavLink to="/notre-histoire" activeClassName="selected">
							History
						</NavLink>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/notre-histoire" component={History} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
