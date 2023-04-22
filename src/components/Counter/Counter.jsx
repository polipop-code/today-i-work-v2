import React from "react";
import "./Counter.css";

function Counter(props) {
	return (
		<>
			<h2 className="Counter-header">Your tasks</h2>
			<h3 className="Counter-subHeader">
				Completed {props.completedTasks} of {props.totalTasks}
			</h3>
		</>
	);
}

export { Counter };
