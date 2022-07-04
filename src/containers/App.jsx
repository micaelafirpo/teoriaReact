import artimonki from "../assets/statics/artimonki.jpg";
import "../assets/css/App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={artimonki} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
