import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import './chart.scss';

function ProjectsChart() {
	const state = useSelector((state) => {
		return {
			arrOfProjects: state.arrOfProjects,
		};
	});

	let totalNumOfProjects = state.arrOfProjects.length;

	let numOfRejectedProjects = state.arrOfProjects.filter((project) => {
		return project.projectState === "Rejected";
	}).length;

	let numOfPendingProjects = state.arrOfProjects.filter((project) => {
		return project.projectState === "Pending";
	}).length;

	let numOfApprovedProjects = state.arrOfProjects.filter((project) => {
		return project.projectState === "Approved";
	}).length;

	const data = {
		labels: ["Pending", "Approved", "Rejected", "Total"],
		datasets: [
			{
				label: "Projects",
				data: [
					numOfPendingProjects,
					numOfApprovedProjects,
					numOfRejectedProjects,
					totalNumOfProjects,
				],
				backgroundColor: [
					"rgba(255, 80, 80, 0.2)",
					"rgba(54, 200, 50, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 150, 220, 0.2)",
				],
				borderColor: [
					"rgba(255, 80, 80, 1)",
					"rgba(54, 200, 50, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 150, 220, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div id="chart_div">
			<Bar data={data} />
		</div>
	);
}

export default ProjectsChart;
