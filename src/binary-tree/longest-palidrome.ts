export function longestPalindrome(theString: string): string {
	const length = theString.length;
	if (length <= 1) {
		return theString;
	}

	// "babad"

	let longestOneSoFar = '';
	for (let i = 0; i < length; i++) {
		// Where the element at 'i' is in the center of an odd-length palindrome.
		const oddLengthPalindrome = expandPalindrome(theString, i, i);

		// Where the elements at 'i' and 'i + 1' form the center of an even-length palindrome.
		const evenLengthPalindrome = expandPalindrome(theString, i, i + 1);

		if (oddLengthPalindrome.length > longestOneSoFar.length) {
			longestOneSoFar = oddLengthPalindrome;
		}

		if (evenLengthPalindrome.length > longestOneSoFar.length) {
			longestOneSoFar = evenLengthPalindrome;
		}
	}

	return longestOneSoFar;
}

export function expandPalindrome(theWholeString: string, leftIndex: number, rightIndex: number): string {
	while (leftIndex >= 0 && rightIndex < theWholeString.length && theWholeString.charAt(leftIndex) === theWholeString.charAt(rightIndex)) {
		// Widen the window symmetrically.
		leftIndex--;
		rightIndex++;
	}

	return theWholeString.substring(leftIndex + 1, rightIndex);
}

export function isPalindromeLinear(theString: string): boolean {
	const length = theString.length;
	let theCharacters: string[] = [];

	if (length <= 1) {
		return true;
	}

	const lastIndexOnTheLeft = length % 2 === 0 ? (length / 2) - 1 : Math.floor(length / 2);
	const firstIndexOnTheRight = length % 2 === 0 ? lastIndexOnTheLeft + 1 : lastIndexOnTheLeft;

	// Load the stack
	for (let i = 0; i <= lastIndexOnTheLeft; i++) {
		theCharacters.push(theString[i]);
	}

	// Pop when a match is found.
	let j = firstIndexOnTheRight;
	while (j < length) {
		if (theCharacters[theCharacters.length - 1] === theString[j]) {
			theCharacters.pop();
		}
		j++;
	}

	return theCharacters.length === 0;
}

export function isPalindrome(someString: string): boolean {
	const length = someString?.length;
	if (length <= 1) {
		return true;
	}

	// If the first letter and last letter are the same, and the inside string is a paldrome, it is.
	if (someString[0] === someString[length - 1]) {
		return isPalindrome(someString.substring(1, length - 1));
	}

	return false;
}