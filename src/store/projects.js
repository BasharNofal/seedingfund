const initialState = {
	arrOfProjects: {},
};

const projectsReducer = (state, action) => {
	state = initialState;
	const { type, payload } = action;
    let arrOfProjects = [];

    switch (type) {
        case "ADD_PROJECT":
            arrOfProjects = [...state.arrOfProjects, payload];
            return {arrOfProjects};
        
        case "UPDATE_PROJECT_STATE":
            arrOfProjects = [...arrOfProjects]
            return arrOfProjects.map(project => {
                if(project._id === payload._id) {
                    return project.projectState = payload.projectState
                }
                return project;
            });
        default:
            return state;
    }
};

export default projectsReducer;