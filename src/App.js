import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './style.css';

import Navbar from './components/NavBar/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import TablePage from './components/Table/TablePage';
import FromPage from './components/Forms/FormPage';
import { TableProvider } from './components/Table/TableContext';

const App = () => (
	<Router>
		<Navbar />
		<div className="container">
			<Switch>
				<TableProvider>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/cursachFrontend" exact>
						<Redirect to={{ pathname: '/' }} />
					</Route>

					<Route path="/:table" exact>
						<TablePage />
					</Route>

					<Route path="/:table/edit/:id?" exact>
						<FromPage />
					</Route>
				</TableProvider>

				<NotFound />
			</Switch>
		</div>
	</Router>
);

export default App;
