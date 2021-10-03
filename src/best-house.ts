/**
 *
 * @param houseValues A grid of house values, according to index (i, j).
 * @returns The maximum possible happiness that Alice and Bob can achieve with their choice of two different houses.
 */
export function maximumPossibleHappiness(houseValues: number[][]): number {
	/**
	 * NOTES:
	 * Happiness(i,j) is commutative, so we can say that Happiness(i, j) === Happiness(j, i).
	 * There will be 36 (n(n-1)/2) handshakes possible with 9 houses.
	 * It is not the case that: "j is i's best pairing" => "i is j's best pairing"
	 */

	let happiest = -100;

	// Store the (houseIndex, houseIndex) tuples when the total happiness is calculated.
	const knownHappinesses = new Map<[number, number], number>();
	for (let i = 0; i < 9; i++) {
		// For each house in this column, determine the aggregate happiness
		for (let j = 0; j < 9; j++) {
			if (i === j || knownHappinesses.has([i, j])) {
				// If it's in the set, it's already been calculated and checked against highest.
				continue;
			}

			const happiness = calculateHappiness(i, j, houseValues);
			if (happiness > happiest) {
				happiest = happiness;
			}
		}
	}

	return happiest;
}

export function calculateHappiness(alicesHouseNumber: number, bobsHouseNumber: number, homeValues: number[][]): number {
	// The greater the total house values and smaller the distance between them, the happier bob and alice will be.
	const alicesHouse: House = deriveCoordinatesFromHouseNumber(alicesHouseNumber);
	const bobsHouse: House = deriveCoordinatesFromHouseNumber(bobsHouseNumber);

	const getHouseValue = (house: House) => {
		return homeValues[house.xCoordinate][house.yCoordinate];
	}

	const totalHouseValue = getHouseValue(alicesHouse) + getHouseValue(bobsHouse);
	return totalHouseValue - unhappinessDueToDistance(alicesHouse, bobsHouse);
}

/**
 * @example
 * ```
 * 	0	1	2
 * 	3	4	5
 * 	6	7	8
 * ```
 * 0 would be [0, 0], 6 would be [1, 2], etc..
 */
export function deriveCoordinatesFromHouseNumber(houseNumber: number): House {
	const xCoordinate = houseNumber % 3;
	const yCoordinate = Math.floor(houseNumber / 3);

	return {
		xCoordinate,
		yCoordinate
	}
}

export function unhappinessDueToDistance(house1: House, house2: House): number {
	const xDistance = Math.abs(house1.xCoordinate - house2.xCoordinate);
	const yDistance = Math.abs(house1.yCoordinate - house2.yCoordinate);

	return xDistance + yDistance;
}

interface House {
	xCoordinate: number;
	yCoordinate: number;
}