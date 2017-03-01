import React from 'react';
import { shallow } from 'enzyme';
import Wrapper, { List, add } from '../example/src/index2';
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

const wrapper = shallow(
  	<Wrapper />
);

var number1 = 1234567890,
	bool1 = true,
	number2 = 123456789,
	bool2 = false,
	day1 = new Date("2017-01-19"),
	day2 = new Date("2017-01-20"),
	func = function update() {};

var instance = makeInstance(list.state(), wrapper.find(List).props());

test('all data is the same', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	}, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	});

	expect(result).toBe(false);

});

test('props.number different -- Number', () => {

	let result = deepCompare(instance, {
		number: number2,
		bool: bool1,
		day: day1,
		add: add,
	}, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	});

	expect(result).toBe(true);

});

test('state.number different -- Number', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	}, {
		number: number2,
		bool: bool1,
		day: day1,
		add: add,
	});

	expect(result).toBe(true);

});

test('props.bool different -- Boolean', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool2,
		day: day1,
		add: add,
	}, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	});

	expect(result).toBe(true);

});

test('state.bool different -- Boolean', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	}, {
		number: number1,
		bool: bool2,
		day: day1,
		add: add,
	});

	expect(result).toBe(true);

});

test('props.day different -- Date', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool2,
		day: day2,
		add: add,
	}, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	});

	expect(result).toBe(true);

});

test('state.day different -- Date', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	}, {
		number: number1,
		bool: bool2,
		day: day2,
		add: add,
	});

	expect(result).toBe(true);

});

test('props.function different -- Function', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool2,
		day: day2,
		add: func,
	}, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	});

	expect(result).toBe(true);

});

test('state.function different -- Function', () => {

	let result = deepCompare(instance, {
		number: number1,
		bool: bool1,
		day: day1,
		add: add,
	}, {
		number: number1,
		bool: bool2,
		day: day2,
		add: func,
	});

	expect(result).toBe(true);

});