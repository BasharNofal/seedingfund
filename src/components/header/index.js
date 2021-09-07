import InfoBar from "./info-bar";
import { If, Then, Else } from "react-if";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions";
import { useDispatch } from "react-redux";
import "./header.scss";

function Header() {
	const dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
			isLoggedIn: state.userInfo.isLoggedIn,
		};
	});

	return (
		<header>
			<InfoBar />
			<If condition={state.isLoggedIn}>
				<Then>
					<div id="logo_and_nav">
						<div>
							<img
								src="./assets/large_seedingfund-01.png"
								alt="Seedingfund logo"
							/>
						</div>
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
									<NavLink
										to="/log_in"
										onClick={() => dispatch(signOut())}
									>
										Sign out
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</Then>
                <Else>
                    <div id="logo">
                        <img src="./assets/large_seedingfund-01.png" alt="" />
                    </div>
                </Else>
			</If>
		</header>
	);
}

export default Header;
