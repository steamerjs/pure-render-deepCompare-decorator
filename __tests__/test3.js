import React from 'react';
import { shallow } from 'enzyme';
import Wrapper, { List, Scroll } from '../example/index3';
import { deepCompare } from "../lib";


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

// var instance = makeInstance(scroll.state(), wrapper.find(scroll).props());

test('all data is the same', () => {

	console.log(list.instance()._reactInternalInstance);

	// let result = deepCompare(instance, {
	// 	title: "dota2 hero",
	// 	subtitle: "Agility",
	// 	heroes: AgilityHeroes1,
	// }, {
	// 	subtitle: "Strength",
	// 	heroes: Strengthheroes1
	// });

	expect(false).toBe(false);

});

// test('props.title different -- String', () => {

// 	let result = deepCompare(instance, {
// 		title: "dota2 heroes",
// 		subtitle: "Agility",
// 		heroes: AgilityHeroes1,
// 	}, {
// 		subtitle: "Strength",
// 		heroes: Strengthheroes1
// 	});

// 	expect(result).toBe(true);

// });

// test('state.subtitle different -- String', () => {

// 	let result = deepCompare(instance, {
// 		title: "dota2 hero",
// 		subtitle: "Agility",
// 		heroes: AgilityHeroes1,
// 	}, {
// 		subtitle: "Strengths",
// 		heroes: Strengthheroes1
// 	});

// 	expect(result).toBe(true);

// });

// test('props.heroes different -- Array & Object', () => {

// 	let result = deepCompare(instance, {
// 		title: "dota2 hero",
// 		subtitle: "Agility",
// 		heroes: AgilityHeroes2,
// 	}, {
// 		subtitle: "Strength",
// 		heroes: Strengthheroes1
// 	});

// 	expect(result).toBe(true);

// });

// test('state.heroes different -- Array & Object', () => {

// 	let result = deepCompare(instance, {
// 		title: "dota2 hero",
// 		subtitle: "Agility",
// 		heroes: AgilityHeroes1,
// 	}, {
// 		subtitle: "Strength",
// 		heroes: Strengthheroes2
// 	});

// 	expect(result).toBe(true);

// });