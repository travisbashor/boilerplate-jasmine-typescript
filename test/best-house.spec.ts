import { maximumPossibleHappiness } from "../src/best-house";

fdescribe('maximumPossibleHappiness', () => {
	it(`should choose two neighboring houses when all values are equal`, () => {
		const homeValues: number[][] = [
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1]
		];

		const expectedMaximumHappiness = (1 + 1) - 1;
		expect(maximumPossibleHappiness(homeValues)).toBe(expectedMaximumHappiness);
	})

	it(`should choose two neighboring mansions when all other houses are disparate cardboard boxes`, () => {
		const homeValues: number[][] = [
			[1, 1, 1],
			[1, 1, 1],
			[1, 50, 50]
		];

		const expectedMaximumHappiness = (50 + 50) - 1;
		expect(maximumPossibleHappiness(homeValues)).toBe(expectedMaximumHappiness);
	})

	it(`should correctly account for distance, but still choose the mansions that are on opposite diagonals over neighboring cardboard boxes`, () => {
		const homeValues: number[][] = [
			[50, 1, 1],
			[1, 1, 1],
			[1, 1, 50]
		];

		const xDistance = 2;
		const yDistance = 2;
		const expectedMaximumHappiness = (50 + 50) - xDistance - yDistance;
		expect(maximumPossibleHappiness(homeValues)).toBe(expectedMaximumHappiness);
	})
})