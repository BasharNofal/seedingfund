import SignUp from "./components/sign-up";
import Signin from "./components/sign-in";
import ProjectsForm from "./components/projects-form";
import Projects from "./components/projects";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { If, Else } from "react-if";
import "./App.css";

function App() {
	const state = useSelector((state) => {
		return {
			isLoggedIn: state.userInfo.isLoggedIn,
		};
	});
	let history = useHistory();
	useEffect(() => {
			if(!state.isLoggedIn) {
				history.push('/register')
			} else {
				
				history.push('/')
			}
	}, [state.isLoggedIn]);

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Projects} />
				<Route exact path="/add_Project" component={ProjectsForm} />
				<Route exact path="/register" component={Signin} />
			</Switch>
		</div>
	);
}

export default App;
