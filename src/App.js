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
					<List>
						{todayList.map((e) => (
							<ListItem key={e.text} text={e.text} completed={e.completed} />
						))}
					</List>
				</div>
			</div>
		</div>
	);
}

export default App;
