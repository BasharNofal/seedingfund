import InfoBar from "./info-bar";
import { If, Then } from "react-if";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
	const state = useSelector((state) => {
		return {
			isLoggedIn: state.userInfo.isLoggedIn,
		};
	});

    console.log(state.isLoggedIn)

	return (
		<header>
			<InfoBar />
			<div id="logo_and_nav">
				<div>
					<img
						src="./assets/large_seedingfund-01.png"
						alt="Seedingfund logo"
					/>
				</div>
				<If condition={state.isLoggedIn}>
					<Then>
						<nav>
							<ul>
								<li>
									<NavLink exact to="/">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink exact to="/add_Project">
										Add Project
									</NavLink>
								</li>
								<li>
									<NavLink to="/nothing">Contact Us</NavLink>
								</li>
								<li>
									<NavLink to="/register">Sign out</NavLink>
								</li>
							</ul>
						</nav>
					</Then>
				</If>
			</div>
		</header>
	);
}

export default Header;
