export function uniqueLetterString(theString: string): number {
	const allSubstrings = getAllSubstrings(theString);

	const sums = allSubstrings.map(countUniqueCharacters);
	console.log(sums);

	return sums.reduce(sum, 0);
}

export function getAllSubstrings(someString: string): string[] {
	const allSubstrings = [];

	for (let windowSize = someString.length; windowSize > 0; windowSize--) {
		allSubstrings.push(...allSubstringsInWindowSize(someString, windowSize))
	}

	return allSubstrings;
}

export function allSubstringsInWindowSize(someString: string, windowSize: number): string[] {
	const substringsInWindow: string[] = [];

	if (windowSize === someString.length) {
		return [someString];
	}

	for (let i = 0; i <= someString.length - windowSize; i++) {
		substringsInWindow.push(someString.substr(i, windowSize));
	}

	return substringsInWindow;
}

export function sum(totalSoFar: number, currentValue: number): number {
	return totalSoFar + currentValue;
}

export function countUniqueCharacters(someString: string): number {
	const characters = someString.split('');
	const uniqueCharacters = new Set<string>();

	characters.forEach((character: string) => {
		if (!uniqueCharacters.has(character)) {
			uniqueCharacters.add(character);
		}
	})
	return uniqueCharacters.size;
}