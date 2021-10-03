import { uniqueLetterString } from "../src/sum-distinct-characters-in-substrings"

describe('sumOfDistinctCharactersInSubstrings', () => {
	it('should return 19 for the example input', () => {
		expect(uniqueLetterString('test')).toBe(19);
	})
})