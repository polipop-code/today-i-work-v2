import React from "react";
import "./NewListItemButton.css";
import { GeneralContext } from "../../context";

function NewListItemButton() {
	const [newTaskText, setNewTaskText] = React.useState("");

	const { addTask } = React.useContext(GeneralContext);

	const onChange = (event) => {
		setNewTaskText(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addTask(newTaskText);
		setNewTaskText("");
	};

	const onKeyEnter = (event) => {
		if (event.keyCode === 13) {
			addTask(newTaskText);
			setNewTaskText("");
		}
	};

	return (
		<div className="NewList-items">
			<input
				className="NewListItemInput"
				type="text"
				placeholder="Create a new task..."
				value={newTaskText}
				onChange={onChange}
				onKeyUp={onKeyEnter}
			/>
			<button className="NewListItemButton" onClick={onSubmit}>
				+
			</button>
		</div>
	);
}

export { NewListItemButton };
