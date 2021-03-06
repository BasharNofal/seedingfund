import { useEffect } from "react";
import { If, Then, Else } from "react-if";
import { useSelector, useDispatch } from "react-redux";
import {
	getAllProjectsAction,
	getAllProjectsByIdAction,
	updateProjectStateAction,
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
		dispatch(
			updateProjectStateAction({ projectState: "Rejected" }, projectId)
		);
	};

	const handleApprove = (projectId) => {
		dispatch(
			updateProjectStateAction({ projectState: "Approved" }, projectId)
		);
	};

	useEffect(() => {
		if (state.userInfo.userType === "admin") {
			dispatch(getAllProjectsAction());
		} else if (state.userInfo.userType === "user") {
			dispatch(getAllProjectsByIdAction(state.userInfo._id));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log(state);
	return (
		<div id="projects_cards_div">
			<ul id="cards_container">
				{state?.arrOfProjects?.map((project) => {
					return (
						<li key={project._id}>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>
										<b>Name: </b> <small>{project.projectName}</small>
									</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										<b>Sector: </b> <small>{project.projectSector}</small>
									</Card.Subtitle>
									<Card.Text className="card_description">
										<b>Description: </b> <small>{project.projectDescription}</small>
									</Card.Text>
									<If
										condition={
											state.userInfo.userType ===
												"admin" &&
											project.projectState === "Pending"
										}
									>
										<Then>
											<div id="buttons_div">
												<Button
													onClick={(event) =>
														handleApprove(
															project._id
														)
													}
													variant="success"
												>
													Approve
												</Button>
												<Button
													onClick={(event) =>
														handleReject(
															project._id
														)
													}
													variant="danger"
												>
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
	);
}

export default Projects;
