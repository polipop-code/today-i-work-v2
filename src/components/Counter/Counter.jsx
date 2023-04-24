import React from "react";
import "./Counter.css";
import { GeneralContext } from "../../context";

function Counter() {
	const { completedTasks, totalTasks } = React.useContext(GeneralContext);
	return (
		<>
			<h2 className="Counter-header">Your tasks</h2>
			<h3 className="Counter-subHeader">
				Completed {completedTasks} of {totalTasks}
			</h3>
		</>
	);
}

export { Counter };
