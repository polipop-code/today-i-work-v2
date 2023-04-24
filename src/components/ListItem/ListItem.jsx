import React from "react";
import "./ListItem.css";

function ListItem(props) {
	return (
		<li className="ListItem">
			<span
				className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
				onClick={props.onComplete}
			>
				<i className="fi fi-sr-check"></i>
			</span>
			<div className="Icon-text-container">
				<p className={`ListItem-p ${props.completed && "ListItem-p--completed"}`}>{props.text}</p>
			</div>
			<span className="Icon Icon-delete" onClick={props.onDelete}>
				<i className="fi fi-sr-cross"></i>
			</span>
		</li>
	);
}

export { ListItem };
