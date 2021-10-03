import { aNode, BSTNode } from './height-of-binary-tree';

export class BinarySearchTreeBuilder {
	private _values: number[];

	constructor() { }

	/**
	 * Builds the binary search tree from the given values and returns the root node.
	 */
	build(): BSTNode {
		return <any>{};
	}
}

export class BinarySearchTree {
	_rootNode: BSTNode;

	insert(value: number): void {
		if (!this._rootNode) {
			this._rootNode = aNode().withData(value).build();
		}
	}
}