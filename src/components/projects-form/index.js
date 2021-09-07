import { useSelector, useDispatch } from "react-redux";
import { addProjectAction } from "../../store/actions";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import FormSelect from "react-bootstrap/FormSelect";
import "./projects-form.scss";

function ProjectsForm() {
	let dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
			userInfo: state.userInfo.userInfo,
			arrOfProjects: state.arrOfProjects,
		};
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		const projectName = event.target.projectName.value;
		const projectDescription = event.target.projectDescription.value;
		const projectSector = event.target.projectSector.value;
		const userId = state.userInfo._id;

		const data = { projectName, projectDescription, projectSector, userId };
		dispatch(addProjectAction(data));
	};

	return (
		<div className="add_project">
			<h3>Projects Form</h3>
			<Form onSubmit={(event) => handleSubmit(event)}>
				<FormGroup className="mb-3" controlId="formBasicText">
					<FormControl
						className="input_fields"
						name="projectName"
						type="text"
						placeholder="Enter Project Name"
						required
					/>
				</FormGroup>
				<FormGroup className="mb-3">
					<FormSelect
						name="projectSector"
						aria-label="Default select example"
						className="input_fields"
						required
					>
						<option disabled selected hidden>
							Choose Project Sector
						</option>
						<option value="Industry">Industry</option>
						<option value="Real Estate">Real Estate</option>
						<option value="Retail">Retail</option>
					</FormSelect>
				</FormGroup>
				<FormGroup
					className="mb-3"
					controlId="exampleForm.ControlTextarea1"
				>
					<FormControl
						name="projectDescription"
						className="input_fields"
						as="textarea"
						rows={4}
						placeholder="Enter Project Description"
						required
					/>
				</FormGroup>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default ProjectsForm;
