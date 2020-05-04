import React from 'react';
import ReactDOM from 'react-dom';
import { app } from './app';
import { media } from './media';
import { evenement } from './evenement';
import { typEvent } from './typEvent';
import { button } from './typEvent';

import { Route, as Router } from 'react-router-dom';
import { Link, as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from "react-router-dom";
/*import Home from "./components/home";         ------------- Je n'ai pas besoin de ces insertions pour l'instant
import Accueil from "./components/accueil";*/



class app extends React.Component {

	constructor(props) {

		super(props);
		this.state = { '' };
	}

	render() {

		return (

			<div> 
				<img />

				<div>
					<button></button>
					<media />
				</div>
				
				<div>
					<button></button>
					<evenement />
				</div>


			</div>


		
		);
	}
}


ReactDOM.render( 

		<app />,
		document.getElementById('app')	
	);