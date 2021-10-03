export interface CharacterWithFrequency {
	character: string;
	frequency: number;
}

/**
 * @example
 * ```
 * 'aa' 	=> 	'Fuck you'
 * 'aab'	=> 	'aba'
 * ```
 * @param theString A string that has repeated characters.
 * @returns The string with the characters rearranged such that no two adjacent characters are the same. Or 'Fuck you' if it's impossible.
 */
export function spreadLikeCharacters(theString: string): string {
	const charactersWithFrequency: CharacterWithFrequency[] = getCharacterFrequencies(theString);
	console.log(charactersWithFrequency);

	const charactersByPriority = new PriorityQueue<string>();
	while (charactersWithFrequency.length) {
		const nextCharacter = charactersWithFrequency.pop();
		charactersByPriority.enqueue(nextCharacter.character, nextCharacter.frequency);
	}

	const orderedCharacters: string[] = [];
	let timeout: QueueItem<string>;
	while (charactersByPriority.size > 0) {
		console.log(charactersByPriority);
		const oneWithHighestFrequency = charactersByPriority.dequeue();
		if (!oneWithHighestFrequency) {
			return 'Fuck you';
		}

		orderedCharacters.push(oneWithHighestFrequency.element);
		oneWithHighestFrequency.priority--;

		if (timeout) {
			charactersByPriority.enqueue(timeout.element, timeout.priority);
		}

		if (oneWithHighestFrequency.priority > 0) {
			// Put it in timeout.
			timeout = oneWithHighestFrequency;
		}
	}

	const theRearrangedVersion = orderedCharacters.join('');
	return theRearrangedVersion;
}

export interface QueueItem<T> {
	element: T;
	priority: number;
}

export class PriorityQueue<T> {
	private _size = 0;
	private _elements: QueueItem<T>[] = [];

	get size() {
		return this._size;
	}

	enqueue(element: T, priority: number): void {
		// Add the element, with highest priority in front.
		const item: QueueItem<T> = {
			element,
			priority
		}

		let added = false;
		for (let i = 0; i < this._size; i++) {
			if (this._elements[i].priority < priority) {
				this._elements.splice(i, 0, item);
				added = true;
				break;
			}
		}

		if (!added) {
			this._elements.push(item);
		}

		this._size++;
	}

	dequeue(): QueueItem<T> {
		this._size--;
		return this._elements.shift();
	}

	printList(): string {
		return this._elements.toString();
	}
}

export function getCharacterFrequencies(theString: string): CharacterWithFrequency[] {
	const characterFrequencies: CharacterWithFrequency[] = theString.split('').reduce((allCharacters, currentCharacter) => {
		const theCharacter = allCharacters.find(entry => entry.character === currentCharacter);

		if (!theCharacter) {
			const entry: CharacterWithFrequency = {
				character: currentCharacter,
				frequency: 1
			};
			return [...allCharacters, entry];
		}

		theCharacter.frequency++;
		return [...allCharacters];
	}, []);

	return characterFrequencies;
}