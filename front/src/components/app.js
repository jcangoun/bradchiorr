import React from 'react';
import ReactDOM from 'react-dom';
import { app } from './app';
import { media } from './media';
import { evenement } from './evenement';
import { typEvent } from './typEvent';

/*import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from "react-router-dom";
import Home from "./components/home";
import Accueil from "./components/accueil";*/



class app extends React.Component {

	constructor(props) {

		super(props);
		this.state = { '' };
	} ;

	render() {

		return (

			<div> 
				<img />
				<media />


			</div>


		
		);
	}
}


ReactDOM.render( 

		<app />,
		document.getElementById('app')	
	);