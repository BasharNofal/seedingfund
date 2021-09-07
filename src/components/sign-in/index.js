import { signinAuth } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import FormText from "react-bootstrap/FormText";
import "./sign-in-up.scss";

function Signin() {
	const dispatch = useDispatch();
	// const state = useSelector(state => {
	//     return {
	//         userInfo: state.userInfo,
	//         isLoggedIn: state.isLoggedIn
	//     }
	// });

	const handleSubmit = (event) => {
		event.preventDefault();
		const username = event.target.username.value;
		const password = event.target.password.value;
		const userInfo = { username, password };

		dispatch(signinAuth(userInfo));
	};

    const handleShowPassword = () => {
		let type = document.querySelector(".password").type;
		type === "password"
			? (document.querySelector(".password").type = "text")
			: (document.querySelector(".password").type = "password");
	};

	return (
		<div className="sign_in_up">
			<h3>Log in</h3>
			<Form onSubmit={(event) => handleSubmit(event)}>
				<FormGroup className="mb-3" controlId="formBasicUsername">
					<FormControl
						className="input_fields"
                        name="username"
						type="text"
						placeholder="Enter Username"
                        required
					/>
				</FormGroup>
				<FormGroup className="mb-3" controlId="formBasicPassword">
					<FormControl
						className="input_fields password"
                        name="password"
						type="password"
						placeholder="Password"
                        required
					/>
				</FormGroup>
				<FormGroup className="mb-3" controlId="formBasicCheckbox">
					<FormCheck type="checkbox" label="Show Password" onChange={handleShowPassword} />
				</FormGroup>
				<Button variant="primary" type="submit">
					Log in
				</Button>
				<FormText className="text-muted" >
					You Don't Have an Account ?, <NavLink to="/sign_up">Sign up</NavLink> Now
				</FormText>
			</Form>
			{/* <form onSubmit={(event)=>handleSubmit(event)}>
                <input type="text" name="username" placeholder="Username" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <button type="submit">Log in</button>
            </form> */}
		</div>
	);
}

export default Signin;
