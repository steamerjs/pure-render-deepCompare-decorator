import React, { Component } from 'react';
import { render } from 'react-dom';
import pureRender from '../lib/';


// @pureRender
export class List extends Component {
	constructor(props, context) {
		super(props, context);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState);
		return true;
	}

	componentDidMount() {
		
	}

	render() {

		console.log(this.props.ele);

		return (
			<div></div>
		);
	}
}

class El extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {

		console.log(this.props.ele);

		return (
			<div></div>
		);
	}
}


export default class Wrapper extends Component {

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		
	}


	render() {

		return (
	        <div>
	        	<List 
	        		ele={<El />}
	        	/>
	        </div>
		);
	}
}


render(
    <Wrapper />,
    document.getElementById('root')
);