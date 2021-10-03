import { insert } from "../src/binary-tree/binary-search-tree-insert";
import { BSTNode, someNode } from "../src/binary-tree/swap-nodes";

describe('insert', () => {
	it('should return a single node if root is null', () => {
		const root: BSTNode = null;

		const resultingTree: BSTNode = insert(root, 1);
		expect(resultingTree).not.toBeNull();
		expect(resultingTree.data).toBe(1);
	})

	it('should insert a lower value to the left of the root node', () => {
		const root: BSTNode = someNode()
			.withData(3)
			.build();

		const resultingNode = insert(root, 1);
		expect(resultingNode.leftChild).not.toBeNull();
		expect(resultingNode.leftChild.data).toBe(1);
	})
})