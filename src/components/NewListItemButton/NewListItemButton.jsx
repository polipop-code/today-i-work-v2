import React from "react";
import "./NewListItemButton.css";

function NewListItemButton() {
	const newItem = () => {
		alert("Hello");
	};

	return (
		<button className="NewListItemButton" onClick={newItem}>
			+
		</button>
	);
}

export { NewListItemButton };
