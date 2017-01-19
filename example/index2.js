import React, { Component } from 'react';
import { render } from 'react-dom';
import pureRender from '../lib/';

export function add() {

}

@pureRender
export class List extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			number: 1234567890,
			bool: true,
			day: new Date("2017-01-19"),
			add: add
		};

	}

	shouldComponentUpdate() {
		return true;
	}

	componentDidMount() {
		
	}

	render() {

		return (
			<div></div>
		);
	}
}


export default class Wrapper extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			number: 1234567890,
			bool: true,
			day: new Date("2017-01-19")
		};
	}

	componentDidMount() {
		
	}

	render() {

		let {
			number,
			bool,
			day,
		} = this.state;

		return (
	        <div>
	        	<List 
	        		number={number}
	        		bool={bool}
	        		day={day}
	        		add={add}
	        	/>
	        </div>
		);
	}
}