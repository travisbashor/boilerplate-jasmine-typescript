import { levelOrder } from "../src/binary-tree/breadth-first";
import { aNode, BSTNode, getHeight } from "../src/binary-tree/height-of-binary-tree";
import { isBinarySearchTree } from "../src/binary-tree/is-binary-search-tree";
import { leftView } from "../src/binary-tree/left-view";
import { outlineTree } from "../src/binary-tree/outline-a-tree";
import { preOrder } from "../src/binary-tree/pre-order-traversal";
import { createNodeFrom, inOrderTraversal, someNode } from "../src/binary-tree/swap-nodes";

xdescribe('getHeight', () => {
	it('should return 0 for a single node without children', () => {
		const aSingleNodeWithoutChildren = aNode()
			.withData(5)
			.build();

		expect(getHeight(aSingleNodeWithoutChildren)).toEqual(0);
	})

	it('should return 1 when a node has just one node with no children', () => {
		const aNodeWithOneChild = aNode()
			.withData(5)
			.withLeftChild(aNode().withData(0).build())
			.build();

		expect(getHeight(aNodeWithOneChild)).toEqual(1);
	})

	it('should return 1 when a node has just one node with no children', () => {
		const leftChild = aNode()
			.withData(1)
			.build();
		const rightChild = aNode()
			.withData(2)
			.build();

		const parentNode = aNode()
			.withData(5)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build();

		// Given the child node heights are 0,
		expect(getHeight(leftChild)).toBe(0);
		expect(getHeight(rightChild)).toBe(0);

		// Expect the height of the parent node to be 1.
		expect(getHeight(parentNode)).toBe(1);
	})

	it('should select the longer of the two child branches', () => {
		const leftGrandchild = aNode()
			.withData(3)
			.build();
		const leftChild = aNode()
			.withData(1)
			.withLeftChild(leftGrandchild)
			.build();

		const rightChild = aNode()
			.withData(2)
			.build();

		const parentNode = aNode()
			.withData(5)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build();

		// Given the left child node is taller than the right child node,
		expect(getHeight(leftChild)).toBeGreaterThan(getHeight(rightChild));

		// Expect the height of the parent node to be 2.
		expect(getHeight(parentNode)).toBe(2);
	})

	// it('should find the longest root-to-leaf path in the sample problem', () => {
	// 	const binaryTree: BSTNode = aBinarySearchTree()
	// 		.withValues([1, 2, 3, 4, 5, 6, 7])
	// 		.build();

	// 	const rootNode = aNode()
	// 		.withData(3)
	// 		.build()
	// })
})

xdescribe('levelOrder', () => {
	it('should print the data in the node', () => {
		const nodeWithNoChildren = aNode()
			.withData(5)
			.build()

		expect(nodeWithNoChildren.data).toBe(5);
		expect(levelOrder(nodeWithNoChildren)).toBe('5');
	})

	it('should print any data in the node', () => {
		const nodeWithNoChildren = aNode()
			.withData(6)
			.build()

		expect(nodeWithNoChildren.data).toBe(6);
		expect(levelOrder(nodeWithNoChildren)).toBe('6');
	})

	it('should print the root, then the left child, then the right child when a root just has two children', () => {
		const leftChild = aNode()
			.withData(2)
			.build();

		const rightChild = aNode()
			.withData(3)
			.build()

		const nodeWithTwoChildren = aNode()
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.withData(1)
			.build()

		expect(levelOrder(nodeWithTwoChildren)).toBe('1 2 3');
	})
})

xdescribe('leftView', () => {
	it(`should print an empty string if the root node is null`, () => {
		const rootNode: BSTNode = null;

		expect(leftView(rootNode)).toBe('');
	})

	it(`should print just the root node's data if there's just a root node`, () => {
		const rootNode = aNode()
			.withData(5)
			.build();

		expect(leftView(rootNode)).toBe(rootNode.data.toString());
	})

	it(`should print the root and left child if the root has two children`, () => {
		/*
				1
			2		3
		*/
		const leftChild = aNode()
			.withData(2)
			.build();

		const rightChild = aNode()
			.withData(3)
			.build();

		const rootNode = aNode()
			.withData(1)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build();

		expect(leftView(rootNode)).toBe('1 2');
	})

	it(`should print the root and the right child if there's just a right child`, () => {
		/*
			  1
				  3
		 */

		const rightChild = aNode()
			.withData(3)
			.build();

		const rootNode = aNode()
			.withData(1)
			.withRightChild(rightChild)
			.build();

		expect(leftView(rootNode)).toBe('1 3');
	})

	it(`should work even when the tree is hasthag-deep`, () => {
		/*
			  1
				  3
			4		5
				6		7
		 */

		const rightLeftRightGreatGrandchild = aNode()
			.withData(6)
			.build();

		const rightLeftGrandchild = aNode()
			.withData(4)
			.withRightChild(rightLeftRightGreatGrandchild)
			.build()

		// The 6.
		const rightRightRightLeftGreatGreatGrandchild = aNode()
			.withData(6)
			.build();

		// The 7.
		const rightRightRightRightGreatGreatGrandchild = aNode()
			.withData(7)
			.build()

		const rightRightGrandChild = aNode()
			.withData(5)
			.withLeftChild(rightRightRightLeftGreatGreatGrandchild)
			.withRightChild(rightRightRightRightGreatGreatGrandchild)
			.build();

		const rightChild = aNode()
			.withData(3)
			.withLeftChild(rightLeftGrandchild)
			.withRightChild(rightRightGrandChild)
			.build();

		const rootNode = aNode()
			.withData(1)
			.withRightChild(rightChild)
			.build();

		expect(leftView(rootNode)).toBe('1 3 4 6');
	})
})

describe('outlineTree', () => {
	it('should just print the root node when the tree is only one node', () => {
		const rootNode = aNode()
			.withData(1)
			.build();

		expect(outlineTree(rootNode)).toBe('1');
	})

	it('should print the left child, then the root, then the right child when the tree is a root with two nodes', () => {
		const leftChild = aNode()
			.withData(2)
			.build();

		const rightChild = aNode()
			.withData(3)
			.build()

		const nodeWithTwoChildren = aNode()
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.withData(1)
			.build();

		const expectedOrder: number[] = [
			leftChild.data,
			nodeWithTwoChildren.data,
			rightChild.data
		]

		expect(outlineTree(nodeWithTwoChildren)).toBe(expectedOrder.join(' '));
	})

	it('should still work when the walls are different heights', () => {
		const leftGrandchild = aNode()
			.withData(3)
			.build();
		const leftChild = aNode()
			.withData(1)
			.withLeftChild(leftGrandchild)
			.build();

		const rightChild = aNode()
			.withData(2)
			.build();

		const parentNode = aNode()
			.withData(5)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build();

		/*
			5
		1		2
	3
					=> 3 1 5 2
		*/
		const expectedOrder: number[] = [leftGrandchild.data, leftChild.data, parentNode.data, rightChild.data];
		expect(outlineTree(parentNode)).toBe(expectedOrder.join(' '));
	})
})

describe('preOrder', () => {
	it('should print 1 2 3 for the basic tree', () => {
		const leftChild = aNode()
			.withData(2)
			.build();

		const rightChild = aNode()
			.withData(3)
			.build()

		const rootNode = aNode()
			.withData(1)
			.withLeftChild(leftChild)
			.withRightChild(rightChild)
			.build()

		expect(preOrder(rootNode).join(' ')).toBe('1 2 3');
	})
})

describe('createNode', () => {
	it('should create a single-node tree', () => {
		const wackyInput: number[][] = [[], [-1, -1]];

		expect(wackyInput[1][0]).toBeDefined();

		const theRoot = createNodeFrom(wackyInput, 1);

		expect(theRoot.data).toBe(1);
		expect(theRoot.leftChild).toBeNull();
		expect(theRoot.rightChild).toBeNull();
	})

	it('should create a basic three-node tree', () => {
		const wackyInput: number[][] = [[], [2, 3], [-1, -1], [-1, -1]];

		const theRoot = createNodeFrom(wackyInput, 1);

		expect(theRoot.data).toBe(1);

		expect(theRoot.leftChild).not.toBeNull();
		expect(theRoot.leftChild.data).toBe(2);

		expect(theRoot.rightChild).not.toBeNull();
		expect(theRoot.rightChild.data).toBe(3);
	})

	it('should work for an unbalanced tree', () => {
		const wackyInput: number[][] = [[], [-1, 2], [-1, -1]];

		const theRoot = createNodeFrom(wackyInput, 1);

		expect(theRoot.data).toBe(1);

		expect(theRoot.leftChild).toBeNull();

		expect(theRoot.rightChild).not.toBeNull();
		expect(theRoot.rightChild.data).toBe(2);
	})
})

describe('inOrderTraversal', () => {
	it('should just print the root for a single-node tree', () => {
		const rootNode = someNode()
			.withData(1)
			.build();

		const result = inOrderTraversal(rootNode).join(' ');

		expect(result).toBe('1');
	})

	it('should print the left, then root, then right for the basic three-node tree', () => {
		const wackyInput: number[][] = [[3], [2, 3], [-1, -1], [-1, -1]];
		const rootNode = createNodeFrom(wackyInput, 1);

		const result = inOrderTraversal(rootNode).join(' ');

		expect(result).toBe('2 1 3');
	})
})

