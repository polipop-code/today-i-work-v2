import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Searcher } from "./components/Searcher/Searcher";
import { List } from "./components/List/List";
import { ListItem } from "./components/ListItem/ListItem.jsx";
import { NewListItemButton } from "./components/NewListItemButton/NewListItemButton";

const todayList = [
	{ text: "Do the bed", completed: false },
	{ text: "Feed the cats", completed: false },
	{ text: "Clean my room", completed: false },
];

function App() {
	return (
		<div className="App">
			<div className="Main">
				<Counter />

				<Searcher />

				<List>
					{todayList.map((e) => (
						<ListItem key={e.text} text={e.text} />
					))}
				</List>
				<NewListItemButton />
			</div>
		</div>
	);
}

export default App;
