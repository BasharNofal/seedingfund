const initialState = {
	userInfo: {},
	isLoggedIn: false,
};

const authReducer = (state, action) => {
	state = initialState;
	const { type, payload } = action;
	let userInfo = {},
		isLoggedIn = false;
	switch (type) {
		case "SIGN_UP":
			userInfo = payload;
			isLoggedIn = true;
			return { userInfo, isLoggedIn };

		case "SIGN_IN":
			userInfo = payload;
			isLoggedIn = true;
			return { userInfo, isLoggedIn };

		default:
			return state;
	}
};

export default authReducer;
