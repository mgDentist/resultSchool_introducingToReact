import logo from './logo.svg';
import './App.css';

// функция ниже это императивный стиль (я описываю как делать)
function showYear() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	return year;
}

// функция ниже это декларативный стиль (я не описываю процесс создания элементов,
// я говорю это сделать)
export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
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
				<p>{showYear()}</p>
			</header>
		</div>
	);
};
