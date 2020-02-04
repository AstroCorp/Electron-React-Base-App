import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './home';
import Login from './login';

import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/utilities.min.css";

const App = () => (
	<HashRouter>
		<Route exact path="/">
			<Home />
		</Route>
		<Route path="/login">
			<Login />
		</Route>
	</HashRouter>
);

export default App;
