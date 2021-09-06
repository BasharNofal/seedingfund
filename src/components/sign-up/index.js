import { signUpAuth } from "../../store/actions";
import {useDispatch, useSelector} from 'react-redux'; 

function SignUp() {

    const dispatch = useDispatch();
    const state = useSelector(state => {
        return {
            userInfo: state.userInfo,
            isLoggedIn: state.isLoggedIn
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userInfo = {username, email, password};

        dispatch(signUpAuth(userInfo));
    }

	return (
		<div>
			<form onSubmit={(event)=>handleSubmit(event)}>
                <input type="text" name="username" placeholder="Username" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <button type="submit">Sign Up</button>
            </form>
		</div>
	);
}

export default SignUp;