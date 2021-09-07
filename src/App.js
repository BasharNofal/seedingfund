import SignUp from "./components/sign-up";
import Signin from "./components/sign-in";
import ProjectsForm from "./components/projects-form";
import Projects from "./components/projects";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.scss";
import ProjectsChart from "./components/chart";

function App() {
	const state = useSelector((state) => {
		return {
			isLoggedIn: state.userInfo.isLoggedIn,
			userInfo: state.userInfo.userInfo
		};
	});
	let history = useHistory();

	useEffect(() => {
		if (!state.isLoggedIn) {
			history.push("/log_in");
		} else {
			history.push("/");
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.isLoggedIn]);

	return (
		<div className="App">
			<Header />
			<main>
				<Switch>
					<Route exact path="/" component={Projects} />
					<Route exact path="/add_Project" component={ProjectsForm} />
					<Route exact path="/log_in" component={Signin} />
					<Route exact path="/sign_up" component={SignUp}/>
					<Route exact path="/chart" component={ProjectsChart} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
