import { aNode } from "../src/binary-tree/height-of-binary-tree";
import { isBinarySearchTree } from "../src/binary-tree/is-binary-search-tree";

describe('isBinarySearchTree', () => {
	it('should count a single node as a valid BST', () => {
		const root = aNode()
			.withData(1)
			.build();

		expect(isBinarySearchTree(root)).toBeTrue();
	})

	/*
			1
		2		3
	 */
	it('should return false if the left child in a three-node tree is greater than the root node', () => {
		const leftChild = aNode()
			.withData(2)
			.build();

		const rightChild = aNode()
			.withData(3)
			.build();

		const root = aNode()
			.withData(1)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build();

		expect(isBinarySearchTree(root)).toBeFalse();
	})

	/*
			3
		1		2
	 */
	it('should return false if the right child in a three-node tree is less than the root node', () => {
		const leftChild = aNode()
			.withData(1)
			.build();

		const rightChild = aNode()
			.withData(2)
			.build();

		const root = aNode()
			.withData(3)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build();

		expect(isBinarySearchTree(root)).toBeFalse();
	})

	/*
			2
		1		3
	 */
	it('should return true if the left child is lower than- and the right child is higher than the root', () => {
		const leftChild = aNode()
			.withData(1)
			.build();

		const rightChild = aNode()
			.withData(3)
			.build();

		const root = aNode()
			.withData(2)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build();

		expect(isBinarySearchTree(root)).toBeTrue();
	})
})