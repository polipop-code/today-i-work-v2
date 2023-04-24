import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const GeneralContext = React.createContext();

function GeneralProvider(props) {
	const {
		item: todayList,
		saveItem: saveTasks,
		loading,
		error,
	} = useLocalStorage("TODAY_LIST_V1", []);
	const [searchValue, setSearchValue] = React.useState("");

	const completedTasks = todayList.filter((todayList) => todayList.completed === true).length;
	const totalTasks = todayList.length;

	let searchedTasks = [];

	if (!searchValue.length > 0) {
		searchedTasks = todayList;
	} else {
		searchedTasks = todayList.filter((task) => {
			const toLowTextTasks = task.text.toLowerCase();
			const toLowTextSearch = searchValue.toLowerCase();

			return toLowTextTasks.includes(toLowTextSearch);
		});
	}

	const doneTasks = (text) => {
		const taskIndex = todayList.findIndex((todayList) => todayList.text === text);

		const newList = [...todayList];
		newList[taskIndex].completed = true;

		saveTasks(newList);
	};

	const deleteTask = (text) => {
		const taskIndex = todayList.findIndex((todayList) => todayList.text === text);

		const newList = [...todayList];
		newList.splice(taskIndex, 1);

		saveTasks(newList);
	};

	const addTask = (text) => {
		const newList = [...todayList];
		newList.push({
			completed: false,
			text,
		});
		saveTasks(newList);
	};

	return (
		<GeneralContext.Provider
			value={{
				loading,
				error,
				completedTasks,
				totalTasks,
				searchValue,
				setSearchValue,
				searchedTasks,
				doneTasks,
				deleteTask,
				addTask,
			}}
		>
			{props.children}
		</GeneralContext.Provider>
	);
}

export { GeneralContext, GeneralProvider };
