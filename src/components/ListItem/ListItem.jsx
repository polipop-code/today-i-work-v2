import React from "react";
import "./ListItem.css";

function ListItem(props) {
	const onComplete = () => {
		alert("Completed" + props.text);
	};

	const onDelete = () => {
		alert("Task deleted" + props.text);
	};

	return (
		<li className="ListItem">
			<span
				className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
				onClick={onComplete}
			></span>
			<p className={`ListItem-p ${props.completed && "ListItem-p--completed"}`}>{props.text}</p>
			<span className="Icon Icon-delete" onClick={onDelete}></span>
		</li>
	);
}

export { ListItem };
