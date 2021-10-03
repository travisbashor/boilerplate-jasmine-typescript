export function lengthOfLongestSubstring(someString: string): number {
	let highestSoFar = 0;

	// Do useful things.
	const characters = someString.split('');
	const characterSet: string[] = [];
	for (let character of characters) {
		if (characterSet.includes(character)) {
			let removedCharacter: string;
			do {
				removedCharacter = characterSet.shift();
			} while (removedCharacter !== character)
		}

		/**
		 *  "abcabcbb"
		 */
		characterSet.push(character);
		if (characterSet.length > highestSoFar) {
			highestSoFar = characterSet.length;
		}
	}

	return highestSoFar;
}