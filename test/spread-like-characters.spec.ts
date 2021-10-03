import { getCharacterFrequencies, spreadLikeCharacters } from "./spread-like-characters";

fdescribe(`spreadLikeCharacters`, () => {
	it(`should return 'Fuck you' if the string has at least two characters and they're all the same`, () => {
		const input = 'aa';

		expect(spreadLikeCharacters(input)).toBe('Fuck you');
	})

	it(`should spread a full house evenly`, () => {
		const fullHouse = 'aaakk';

		expect(spreadLikeCharacters(fullHouse)).toBe('akaka');
	})
})

fdescribe(`getCharacterFrequencies`, () => {
	it(`should have 1 a piece for 'abc'`, () => {
		const input = 'abc';

		const characterFrequencies = getCharacterFrequencies(input);
		expect(characterFrequencies.length).toBe(3);
		expect(characterFrequencies).toContain({ character: 'a', frequency: 1 });
		expect(characterFrequencies).toContain({ character: 'b', frequency: 1 });
		expect(characterFrequencies).toContain({ character: 'c', frequency: 1 });
	})

	it(`should count two b's in 'abbc'`, () => {
		const input = 'abbc';

		const characterFrequencies = getCharacterFrequencies(input);
		expect(characterFrequencies.length).toBe(3);
		expect(characterFrequencies).toContain({ character: 'b', frequency: 2 });
	})
})