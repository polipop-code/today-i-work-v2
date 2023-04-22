import React from "react";
import "./Searcher.css";

function Searcher({ searchValue, setSearchValue }) {
	const onWrite = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<input
			className="Searcher"
			placeholder="Search a task..."
			value={searchValue}
			onChange={onWrite}
		/>
	);
}

export { Searcher };
