import React from 'react';
import { shallow } from 'enzyme';
import Wrapper, { List, Scroll, ele } from '../example/src/index3';
import { deepCompare } from "../src";


function makeInstance(state, props) {
	return {
		props,
		state
	};
}

const list = shallow(
    <List />
);

const scroll = shallow(
  	<Scroll />
);


const wrapper = shallow(
  	<Wrapper />
);

var listEle = list.instance()._reactInternalInstance._currentElement,
	scrollEle = scroll.instance()._reactInternalInstance._currentElement,
	newEle = <p></p>;

var instance = makeInstance(scroll.state(), {children: listEle});

test('all data is the same', () => {

	// console.log(instance);

	let result = deepCompare(instance, {
		children: listEle
	}, {
		ele: ele
	});

	expect(result).toBe(false);

});

test('props.children is different', () => {

	let result = deepCompare(instance, {
		children: scrollEle
	}, {
		ele: ele
	});

	expect(result).toBe(true);

});

test('state.ele is different', () => {

	let result = deepCompare(instance, {
		children: listEle
	}, {
		ele: newEle
	});

	expect(result).toBe(true);

});