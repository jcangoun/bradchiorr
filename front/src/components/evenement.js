import React from 'react';






export class evenement extends React.Component {

	constructor(props) {
		super(props);
		this.state= { '' };
	}


	render() {


		return <h1></h1>;

	}
}


ReactDOM.render (

	<evenement />,

	document.getElementById('app')

);