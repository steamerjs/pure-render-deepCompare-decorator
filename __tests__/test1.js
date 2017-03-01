import React from 'react';
import { shallow } from 'enzyme';
import Wrapper, { List } from '../example/src/index1';
import { deepCompare } from "../dist";


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

var Strengthheroes1 = [
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
];

var Strengthheroes2 = [
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
	{
		id: 5,
		name: "BeastMaster"
	},
	{
		id: 6,
		name: "Dragon Knight"
	},
];

var AgilityHeroes1 = [
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
];

var AgilityHeroes2 = [
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
	{
		id: 5,
		name: "Morphling"
	},
	{
		id: 6,
		name: "Phantom Lancer"
	}
];

var instance = makeInstance(list.state(), wrapper.find(List).props());

test('all data is the same', () => {

	let result = deepCompare(instance, {
		title: "dota2 hero",
		subtitle: "Agility",
		heroes: AgilityHeroes1,
	}, {
		subtitle: "Strength",
		heroes: Strengthheroes1
	});

	expect(result).toBe(false);

});

test('props.title different -- String', () => {

	let result = deepCompare(instance, {
		title: "dota2 heroes",
		subtitle: "Agility",
		heroes: AgilityHeroes1,
	}, {
		subtitle: "Strength",
		heroes: Strengthheroes1
	});

	expect(result).toBe(true);

});

test('state.subtitle different -- String', () => {

	let result = deepCompare(instance, {
		title: "dota2 hero",
		subtitle: "Agility",
		heroes: AgilityHeroes1,
	}, {
		subtitle: "Strengths",
		heroes: Strengthheroes1
	});

	expect(result).toBe(true);

});

test('props.heroes different -- Array & Object', () => {

	let result = deepCompare(instance, {
		title: "dota2 hero",
		subtitle: "Agility",
		heroes: AgilityHeroes2,
	}, {
		subtitle: "Strength",
		heroes: Strengthheroes1
	});

	expect(result).toBe(true);

});

test('state.heroes different -- Array & Object', () => {

	let result = deepCompare(instance, {
		title: "dota2 hero",
		subtitle: "Agility",
		heroes: AgilityHeroes1,
	}, {
		subtitle: "Strength",
		heroes: Strengthheroes2
	});

	expect(result).toBe(true);

});