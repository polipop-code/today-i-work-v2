import React from "react";
import "./ListItem.css";

function ListItem(props) {
	return (
		<li className="ListItem">
			<span
				className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
				onClick={props.onComplete}
			>
				<i class="fi fi-sr-check"></i>
			</span>
			<p className={`ListItem-p ${props.completed && "ListItem-p--completed"}`}>{props.text}</p>
			<span className="Icon Icon-delete" onClick={props.onDelete}>
				<i class="fi fi-sr-cross"></i>
			</span>
		</li>
	);
}

export { ListItem };
