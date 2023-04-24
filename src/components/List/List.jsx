import React from "react";
import "./List.css";

function List(props) {
	return <ul className="List">{props.children}</ul>;
}

export { List };
