import { lengthOfLongestSubstring } from "../src/binary-tree/longest-substring";

describe(`lengthOfLongestSubstring`, () => {
	it(`should output 0 for an empty string`, () => {
		const anEmptyString = '';

		expect(lengthOfLongestSubstring(anEmptyString)).toBe(0);
	})

	it(`should work for all of the examples on the problem page`, () => {
		const examples: { theExampleString: string, expectedOutput: number, theSubstring?: string }[] = [
			{
				theExampleString: 'abcabcbb',
				expectedOutput: 3,
				theSubstring: 'abc'
			},
			{
				theExampleString: 'bbbbb',
				expectedOutput: 1,
				theSubstring: 'b'
			},
			{
				theExampleString: 'pwwkew',
				expectedOutput: 3,
				theSubstring: 'wke'
			},
			{
				theExampleString: '',
				expectedOutput: 0,
				theSubstring: ''
			}
		]

		for (let example of examples) {
			expect(lengthOfLongestSubstring(example.theExampleString)).toBe(example.expectedOutput, `The answer is '${example.theSubstring}', with the length of ${example.expectedOutput}`);
		}
	})
})