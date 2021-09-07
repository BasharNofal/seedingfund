const initialState = [];

const projectsReducer = (state = initialState, action) => {
	const { type, payload } = action;
	let arrOfProjects = [];

	switch (type) {
		case "GET_PROJECTS":
			arrOfProjects = [...payload];
			return [...arrOfProjects];
		case "ADD_PROJECT":
			console.log(state);
			arrOfProjects = [...state, payload];
			return [...arrOfProjects];
		case "UPDATE_PROJECT_STATE":
			console.log(1, { state }, { payload });
			arrOfProjects = [...state];
			arrOfProjects = arrOfProjects.map((project) => {
				if (project._id === payload._id) {
					console.log(project);
					return {
						_id: project._id,
						projectName: project.projectNameName,
						projectSector: project.projectSector,
						userId: project.userId,
						projectDescription: project.projectDescription,
						projectState: payload.projectState,
					};
				}
				return project;
			});
			return [...arrOfProjects];
		default:
			return [...state];
	}
};

export default projectsReducer;
