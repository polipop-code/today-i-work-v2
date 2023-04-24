import React from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Searcher } from "./components/Searcher/Searcher";
import { List } from "./components/List/List";
import { ListItem } from "./components/ListItem/ListItem.jsx";
import { NewListItemButton } from "./components/NewListItemButton/NewListItemButton";
import { GeneralContext } from "./context";

function AppUI() {
	return (
		<div className="App">
			<div className="Main">
				<div className="Main-LeftTag">
					<h1>Today I Work</h1>
					<p>Welcome, glad to see you again, time to work ah?</p>
					<NewListItemButton />
					<div className="Main-LeftTag--ImageContainer">
						<img
							src="https://i.pinimg.com/564x/a5/31/47/a53147e258432e1eb97e3f8f4f5c7645.jpg"
							alt=""
						/>
					</div>
				</div>

				<div className="Main-RightTag">
					<Counter />
					<Searcher />
					<GeneralContext.Consumer>
						{({ error, loading, searchedTasks, doneTasks, deleteTask }) => {
							return (
								<List>
									{error && <p>An error has append...</p>}
									{loading && <p>Loading list...</p>}
									{!loading && !searchedTasks.length && <p>Create your first task</p>}
									{searchedTasks.map((e) => (
										<ListItem
											key={e.text}
											text={e.text}
											completed={e.completed}
											onComplete={() => doneTasks(e.text)}
											onDelete={() => deleteTask(e.text)}
										/>
									))}
								</List>
							);
						}}
					</GeneralContext.Consumer>
				</div>
			</div>
		</div>
	);
}

export { AppUI };
