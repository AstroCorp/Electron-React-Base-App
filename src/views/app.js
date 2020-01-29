import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from './home';
import About from './about';

const App = () => (
	<div>
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</div>
);

export default App;
