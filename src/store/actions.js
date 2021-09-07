import superagent from "superagent";

const api = "https://seedingfund-bn.herokuapp.com";

export const signUpAuth = (data) => {
	return async (dispatch) => {
		try {
			const response = await superagent
				.post(`${api}/auth/signup`)
				.send({ ...data });
			// console.log("response", response.body);
			const { user } = response.body;
			dispatch(signin(user));
		} catch (error) {
			throw new Error(error);
		}
	};
};

export const signinAuth = (userInfo) => {
	return (dispatch) => {
		setLogin();
		const validateToken = (response) => {
            // console.log(response)
			dispatch(signin(response));
		};

		async function setLogin() {
			// console.log({ userInfo });
			try {
				const response = await superagent
					.post(`${api}/auth/signin`)
					.set(
						"authorization",
						"basic " +
							new Buffer.from(
								`${userInfo.username}:${userInfo.password}`,
								"utf8"
							).toString("base64")
					);
				validateToken(response.body);
			} catch (error) {
				console.error("Login error", error);
			}
		}
	};
};

export const getAllProjectsAction = () => {
	return async (dispatch) => {
		try {
			const response = await superagent.get(
				`${api}/projects/getAll`
			);
			dispatch(getProjects(response.body));
		} catch (error) {
			throw new Error(error);
		}
	};
};

export const getAllProjectsByIdAction = (userId) => {
	return async (dispatch) => {
		try {
            console.log({userId})
			const response = await superagent.get(
				`${api}/projects/getAllById/${userId}`
			);
            console.log({response})
			dispatch(getProjects(response.body));
		} catch (error) {
			throw new Error(error);
		}
	};
};

export const addProjectAction = (data) => {
    return async (dispatch) => {
        try {
            const response = await superagent
            .post(`${api}/projects/addProject`)
            .send({ ...data });
            console.log(response.body.data)
			dispatch(addProject(response.body.data));
		} catch (error) {
            throw new Error(error);
		}
	};
};

export const updateProjectStateAction = (projectState, id) => {
    return async (dispatch) => {
        try {
            const response = await superagent
            .put(`${api}/projects/updateState/${id}`)
            .send({ ...projectState });
            console.log('UPDATE RESPONSE ================',response.body)
			dispatch(updateProjectState(response.body.data));
		} catch (error) {
            throw new Error(error);
		}
	};
};

export const signOut = () => {
    return {
        type: "SIGN_OUT",
        payload: 'nothing'
    }
}

const signin = (payload) => {
	return {
		type: "SIGN_IN",
		payload,
	};
};


const getProjects = (payload) => {
	return {
		type: "GET_PROJECTS",
		payload,
	};
};

const addProject = (payload) => {
	return {
		type: "ADD_PROJECT",
		payload,
	};
};

const updateProjectState = (payload) => {
	return {
		type: "UPDATE_PROJECT_STATE",
		payload,
	};
};