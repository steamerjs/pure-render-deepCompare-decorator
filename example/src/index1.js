import React, { Component } from 'react';
import { render } from 'react-dom';
import pureRender from '../../dist/';


@pureRender
export class List extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			subtitle: "Strength",
			heroes: [
				{
					id: 1,
					name: "Earthshaker"
				},
				{
					id: 2,
					name: "Sven"
				},
				{
					id: 3,
					name: "Tiny"
				},
				{
					id: 4,
					name: "Kunkka"
				},
			]
		};

	}

	shouldComponentUpdate() {
		return true;
	}

	componentDidMount() {
		
	}

	render() {

		let {
			title,
		} = this.props;

		let {
			subtitle,
		} = this.props;

		let heroes = this.props.heroes || [];

		return (
			<div>
				<p>{title}</p>
				<p>{subtitle}</p>
		        <ul>
		        	{
		        		heroes.map((item) => {
		        			return (
		        				<li key={item.id}>{item.name}</li>
		        			);
		        		})
		        	}
		        </ul>
		        <p>{this.state.subtitle}</p>
		        <ul>
		        	{
		        		this.state.heroes.map((item) => {
		        			return (
		        				<li key={item.id}>{item.name}</li>
		        			);
		        		})
		        	}
		        </ul>
		    </div>
		);
	}
}


export default class Wrapper extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			title: "dota2 hero",
			subtitle: "Agility",
			heroes: [
				{
					id: 1,
					name: "Anti-Mage"
				},
				{
					id: 2,
					name: "Drow Ranger"
				},
				{
					id: 3,
					name: "Juggernaut"
				},
				{
					id: 4,
					name: "Minana"
				},
			]
		};
	}

	componentDidMount() {
		
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {

		let {
			title,
			subtitle,
			heroes,
		} = this.state;

		return (
	        <div>
	        	<List 
	        		title={title} 
	        		subtitle={subtitle}
	        		heroes={heroes}
	        	/>
	        </div>
		);
	}
}


// render(
//     <Wrapper />,
//     document.getElementById('root')
// );