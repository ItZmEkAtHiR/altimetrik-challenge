import React from "react";
import AppRoutes from "./components/appRoutes";
import Header from "./components/header";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.scss";

const App: React.FC = () => {
	return (
		<Router>
			<section className="wrapper">
				<Header />
				<main className="bodyWrapper">
					<AppRoutes />
				</main>
			</section>
		</Router>
	);
};

export default App;
