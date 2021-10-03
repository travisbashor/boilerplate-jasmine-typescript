import { expandPalindrome, isPalindrome, longestPalindrome } from "../src/binary-tree/longest-palidrome"

describe('expandPalindrome', () => {
	it(`should return 'aa' for 'aa'`, () => {
		expect(expandPalindrome('aa', 0, 1)).toBe('aa');
	})

	it(`should return the middle character of an all-unique string when starting at the middle`, () => {
		const allUniqueCharacters = 'abc';

		expect(expandPalindrome(allUniqueCharacters, 1, 1)).toBe('b');
	})
})

describe('longestPalidnrome', () => {
	it(`should work for all the examples`, () => {
		const examples: { theString: string, possibleAnswers: string[] }[] = [
			{
				theString: 'babad',
				possibleAnswers: [
					'bab',
					'aba'
				]
			},
			{
				theString: 'cbbd',
				possibleAnswers: [
					'bb'
				]
			},
			{
				theString: 'a',
				possibleAnswers: [
					'a'
				]
			},
			{
				theString: 'ac',
				possibleAnswers: [
					'a',
					'c'
				]
			},
		]

		for (let example of examples) {
			const output = longestPalindrome(example.theString);
			console.log(`String: '${example.theString}', Output: '${output}'`);
			expect(example.possibleAnswers).toContain(longestPalindrome(example.theString))
		}
	})

	it(`shouldn't take forever`, () => {
		var startTime = Date.now();

		const aLongString = 'babaddtattarrattatddetartrateedredividerb';
		const theResult = longestPalindrome(aLongString);

		var endTime = Date.now();

		expect(endTime - startTime).toBeLessThan(1000);
	})
})

describe('isPalindrome', () => {
	it(`should call an empty string a palindrome`, () => {
		expect(isPalindrome('')).toBeTrue();
	})

	it(`should call a single-character string a palindrome`, () => {
		expect(isPalindrome('a')).toBeTrue();
	})

	it(`should work for even-length strings`, () => {
		const evenLengthPalindrome = 'aa';

		expect(isPalindrome(evenLengthPalindrome)).toBeTrue();
	})

	it(`should work for odd-length strings`, () => {
		const oddLengthPalindrome = 'aaa';

		expect(isPalindrome(oddLengthPalindrome)).toBeTrue();
	})

	it(`should at least recognize the palindromes from the examples`, () => {
		const theExamplePalindromes: string[] = [
			'bab',
			'bb',
			'a',
		]

		theExamplePalindromes.forEach(palindrome => {
			expect(isPalindrome(palindrome)).toBeTrue();
		})
	})

	it(`should not call a non-palindrome a palindrome`, () => {
		const someNonPalindrome = 'az';

		expect(isPalindrome(someNonPalindrome)).toBeFalse();
	})
})