// код на JSX

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
// export const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>{showYear()}</p>
// 			</header>
// 		</div>
// 	);
// };


// Код на чистом JS
// в основном код на чистом JS это императивный тип,
// за исключением методов createElement(), setAttribute(), append()
// и момента с вызовом функции showYear() - они имеют декларативный тип

export const App = () => {

	const parentDiv = document.createElement('div');
	parentDiv.className = 'App';

	const header = document.createElement('header');
	header.className = 'App-header';

	const headerImg = document.createElement('img');
	headerImg.src = logo;
	headerImg.className = 'App-logo';
	headerImg.alt = 'logo';

	const headerLink = document.createElement('a');
	headerLink.className = 'App-link';
	headerLink.href = 'https://reactjs.org';
	headerLink.setAttribute('target', '_blank');
	headerLink.setAttribute('rel', 'noopener noreferrer');
	headerLink.textContent = 'Learn React';

	const headerParagraph = document.createElement('p');
	headerParagraph.textContent = `${showYear()}`;

	document.body.append(parentDiv);
	parentDiv.append(header);
	header.append(headerImg);
	header.append(headerLink);
	header.append(headerParagraph);
};
