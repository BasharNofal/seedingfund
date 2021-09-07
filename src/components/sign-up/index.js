import { signUpAuth } from "../../store/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import FormText from "react-bootstrap/FormText";
import "../sign-in/sign-in-up.scss";

function SignUp() {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const username = event.target.username.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const userInfo = { username, email, password };

		dispatch(signUpAuth(userInfo));
	};

    const handleShowPassword = () => {
		let type = document.querySelector(".password").type;
		type === "password"
			? (document.querySelector(".password").type = "text")
			: (document.querySelector(".password").type = "password");
	};

	return (
		<div className="sign_in_up">
			<h3>Sign up</h3>
			<Form onSubmit={(event) => handleSubmit(event)}>
				<FormGroup className="mb-3" controlId="formBasicEmail">
					<FormControl
						className="input_fields"
                        name="email"
						type="email"
						placeholder="Enter Email"
						required
					/>
				</FormGroup>
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
                        autoComplete="false"
						required
					/>
				</FormGroup>
				<FormGroup className="mb-3" controlId="formBasicCheckbox">
					<FormCheck type="checkbox" label="Show Password" onChange={handleShowPassword} />
				</FormGroup>
				<Button variant="primary" type="submit">
					Log in
				</Button>
				<FormText className="text-muted">
					You Already Have an Account,{" "}
					<NavLink to="/log_in">Log in</NavLink>
				</FormText>
			</Form>
		</div>
	);
}

export default SignUp;
