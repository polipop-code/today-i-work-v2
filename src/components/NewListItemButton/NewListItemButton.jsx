import React from "react";
import "./NewListItemButton.css";

function NewListItemButton() {
	const newItem = () => {
		alert("Hello");
	};

	return (
		<>
			<input className="NewListItemInput" type="text" placeholder="Create a new task..." />
			<button className="NewListItemButton" onClick={newItem}>
				+
			</button>
		</>
	);
}

export { NewListItemButton };
