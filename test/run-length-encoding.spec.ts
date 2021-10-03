import { encode } from '../src/binary-tree/run-length-encoding';

describe('encode', () => {
	it('should produce the sample output for the sample input', () => {
		const input = 'aaaabbccca';

		expect(encode(input)).toBe('4a2b3c1a');
	})

	it(`should produce the output 5a for 5 a's`, () => {
		const input = 'aaaaa';

		expect(encode(input)).toBe('5a');
	})

	it(`should produce the output 2a3b4n for aabbbnnnn`, () => {
		const input = 'aabbbnnnn';

		expect(encode(input)).toBe('2a3b4n');
	})
})