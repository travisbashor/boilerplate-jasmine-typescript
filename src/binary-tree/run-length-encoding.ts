export function encode(someString: string): string {
	let characterCounter = 0;
	const encodedValue = someString.split('').reduce((encodedSoFar: string[], currentCharacter: string) => {
		if (encodedSoFar.length === 0) {
			return [...encodedSoFar, (++characterCounter).toString(), currentCharacter]
		}

		if (encodedSoFar.length % 2 !== 0) {
			throw new Error('Something went wrong. The encoded string should always have an even length.');
		}

		const characterIndex = encodedSoFar.length - 1;
		const counterIndex = encodedSoFar.length - 2;
		const isTheCharacterRepeated = encodedSoFar[characterIndex] === currentCharacter;
		if (isTheCharacterRepeated) {
			encodedSoFar[counterIndex] = (++characterCounter).toString();
			return encodedSoFar;
		}

		characterCounter = 0;
		return [...encodedSoFar, (++characterCounter).toString(), currentCharacter];
	}, [])

	return encodedValue.join('');
}