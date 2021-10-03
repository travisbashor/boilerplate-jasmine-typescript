import { BSTNode } from "./height-of-binary-tree";

export function outlineTree(root: BSTNode): string {
	if (!root.leftChild && !root.rightChild) {
		return root.data.toString();
	}

	// Do a depth-first, left-leaning traversal of the left branch. Include the root.
	const leftWall = getLeftmostLeaf(root);

	// Do a depth-first, right-leaning traversal of the right branch. Exclude the root.
	const rightWall = getRightmostLeaf(root.rightChild);

	// Profit.
	return [leftWall, rightWall].join(' ').trim();
}

/**
 *
 * @param node The root of the binary tree.
 */
export function getLeftmostLeaf(node: BSTNode): string {
	if (!node) {
		return '';
	}

	if (!node.leftChild && !node.rightChild) {
		return node.data.toString();
	}

	if (!!node.leftChild) {
		// go that way.
		return [getLeftmostLeaf(node.leftChild), node.data.toString()].join(' ').trim();
	}

	if (!!node.rightChild) {
		return [getLeftmostLeaf(node.rightChild), node.data.toString()].join(' ').trim();
	}
}

export function getRightmostLeaf(node: BSTNode): string {
	if (!node) {
		return '';
	}

	if (!node.leftChild && !node.rightChild) {
		return node.data.toString();
	}

	// Prefer right.
	if (!!node.rightChild) {
		return [getLeftmostLeaf(node.rightChild), node.data.toString()].join(' ').trim();
	}

	// If right's not available, try left.
	if (!!node.leftChild) {
		return [getLeftmostLeaf(node.leftChild), node.data.toString()].join(' ').trim();
	}
}