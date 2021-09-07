import { useEffect } from "react";
import { If, Then, Else } from "react-if";
import { useSelector, useDispatch } from "react-redux";
import {
	getAllProjectsAction,
	getAllProjectsByIdAction,
    updateProjectStateAction
} from "../../store/actions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./projects.scss";

function Projects() {
	let dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
			userInfo: state.userInfo.userInfo,
			arrOfProjects: state.arrOfProjects,
		};
	});

    const handleReject = (projectId) => {
        dispatch(updateProjectStateAction({ projectState:"Rejected" }, projectId))
    }

    const handleApprove = (projectId) => {
        dispatch(updateProjectStateAction({ projectState:"Approved" }, projectId))
    }

	useEffect(() => {
		if (state.userInfo.userType === "admin") {
			dispatch(getAllProjectsAction());
		} else if (state.userInfo.userType === "user") {
			dispatch(getAllProjectsByIdAction(state.userInfo._id));
		}
	}, []);
	console.log(state);
	return (
		<div>
			<h1>Projects</h1>

			<div>
				<ul id="cards_container">
					{state?.arrOfProjects?.map((project) => {
						return (
							<li key={project._id}>
								<Card style={{ width: "18rem" }}>
									<Card.Body>
										<Card.Title>
											{project.projectName}
										</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											{project.projectSector}
										</Card.Subtitle>
										<Card.Text>
											{project.projectDescription}
										</Card.Text>
										<If
											condition={
												state.userInfo.userType ===
													"admin" &&
												project.projectState ===
													"Pending"
											}
										>
											<Then>
												<div id="buttons_div">
													<Button onClick={(event)=>handleApprove(project._id)} variant="success">
														Approve
													</Button>
													<Button onClick={(event)=>handleReject(project._id)} variant="danger">
														Reject
													</Button>
												</div>
											</Then>
											<Else>
												<Card.Text>
													{project.projectState}
												</Card.Text>
											</Else>
										</If>
									</Card.Body>
								</Card>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Projects;
