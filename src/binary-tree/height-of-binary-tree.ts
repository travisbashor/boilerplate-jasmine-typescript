export interface BSTNode {
	data: number;
	leftChild?: BSTNode;
	rightChild?: BSTNode;
	visited?: boolean;
}

export function getHeight(node: BSTNode): number {
	const { leftChild, rightChild } = node;

	if (!(leftChild || rightChild)) {
		return 0;
	}

	// If it only has one child, use the height of that.
	if (!!leftChild && !rightChild) {
		return 1 + getHeight(leftChild);
	}

	if (!!rightChild && !leftChild) {
		return 1 + getHeight(rightChild);
	}

	// If it has two children, use the height of the taller one.
	return 1 + Math.max(getHeight(<BSTNode>leftChild), getHeight(<BSTNode>rightChild))
}

class BSTNodeBuilder {
	private _rightChild: BSTNode = null;
	private _leftChild: BSTNode = null;
	private _data: number = 0;

	constructor() { }

	withData(someNumber: number): BSTNodeBuilder {
		this._data = someNumber;
		return this;
	}

	withLeftChild(node: BSTNode): BSTNodeBuilder {
		this._leftChild = node;
		return this;
	}

	withRightChild(node: BSTNode): BSTNodeBuilder {
		this._rightChild = node;
		return this;
	}

	build(): BSTNode {
		const theNode: BSTNode = {
			data: this._data || 0,
			leftChild: this._leftChild,
			rightChild: this._rightChild,
			visited: false
		}

		return theNode;
	}
}

export function aNode(): BSTNodeBuilder {
	return new BSTNodeBuilder();
}

