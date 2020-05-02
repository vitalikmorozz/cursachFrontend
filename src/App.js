import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import TablePage from './components/Table/TablePage';
import { TableProvider } from './components/Table/TableContext';

const App = () => (
	<Router>
		<Navbar />
		<Switch>
			<TableProvider>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/:table">
					<TablePage />
				</Route>
			</TableProvider>

			<NotFound />
		</Switch>
	</Router>
);

export default App;
