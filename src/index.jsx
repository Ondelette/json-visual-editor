import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.styl';
import Page from './Page';

export class App extends React.Component {
	render() {
		return (
			<Page />
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));