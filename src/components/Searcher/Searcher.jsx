import React from "react";
import "./Searcher.css";

function Searcher() {
	const onWrite = (event) => {
		console.log(event.target.value);
	};

	return <input className="Searcher" placeholder="Search a task..." onChange={onWrite} />;
}

export { Searcher };
