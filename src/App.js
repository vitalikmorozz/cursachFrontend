import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import TablePage from './components/TablePage';

const App = () => (
	<Router>
		<Navbar />
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>

			<Route path="/:table">
				<TablePage />
			</Route>

			<NotFound />
		</Switch>
	</Router>
);

export default App;
