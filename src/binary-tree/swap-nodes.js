/**
 * @summary Given a number of nodes in the tree, a list of the children of those nodes, a number
 * of swap operations, and a multiplier indicating the level on which those swap operations should
 *  occur, do some swapping and return the inOrder traversal of the resulting tree after each swap.
 * @param {number[][]} indexes The indexes of the children of the node whose index is the first index of the 2d array.
 * (e.g.) indexes[1] = [2, 3] would mean that the children of node 1 are 2 (left) and 3 (right).
 * @param {number[]} queries All of the levels at which we need to perform a swap operation. They
 * are all some multiple of 'k', passed into the main program.
 * @returns {number[][]} The inOrder traversal of the tree after the swap operation.
 */
export function swapNodes(indexes, queries) {
    const ROOT_INDEX = 1;
	const allInOrderTraversals = [];

    queries.forEach((lineNumber) => {
        // Swap the nodes at that line.
        const newTreeValues = swapNodesAtLevel(indexes, lineNumber);
        const currentInOrderValues = inOrderTraversal(createNodeFrom(newTreeValues, ROOT_INDEX));
		allInOrderTraversals.push(currentInOrderValues);
    });

    return allInOrderTraversals;
}

/**
 *
 * @param {number[][]} indexes
 * @param {number} lineNumber The index of the current node.
 * @returns {number[][]} A new tree
 */
export function swapNodesAtLevel(indexes, lineNumber) {
    // Swap the values if index[lineNumber] (e.g., 0 -> 1 and 1 -> 0)
    // Then, swap the lines indicated by those indices.
    const newTree = indexes;
    newTree[lineNumber][0] = indexes[lineNumber][1];
    newTree[lineNumber][1] = indexes[lineNumber][1];

    const leftChildsRow = indexes[lineNumber][0];
    const rightChildsRow = indexes[lineNumber][1];
    newTree[leftChildsRow] = [...indexes[rightChildsRow]];
    newTree[rightChildsRow] = [...indexes[leftChildsRow]];

	console.log(newTr);
    return newTree;
}
/**
 *
 * @param {number[][]} indexes The indexes of the children of the node whose index is the first index of the 2d array.
 * (e.g.) indexes[1] = [2, 3] would mean that the children of node 1 are 2 (left) and 3 (right).
 * @returns {BSTNode}
 */
export function createNodeFrom(indexes, currentIndex) {
    const NULL_NODE_INDEX = -1;
    if (currentIndex === NULL_NODE_INDEX) {
        return null;
    }

    const leftChildIndex = indexes[currentIndex][0];
    const rightChildIndex = indexes[currentIndex][1];

    // For a leaf node, return the node.
    return someNode()
        .withData(currentIndex)
        .withLeftChild(createNodeFrom(indexes, leftChildIndex))
        .withRightChild(createNodeFrom(indexes, rightChildIndex))
        .build();
}

/**
 *@param {BSTNode | null} root The root of the tree.
 @returns {number[]} The indices of the traversed nodes, sorted InOrder.
 */
export function inOrderTraversal(root) {
    if (root === null) {
        return [];
    }

    return [...inOrderTraversal(root.leftChild), root.data, ...inOrderTraversal(root.rightChild)];
}

/**
 * @property {number} data
 * @property {BSTNode} [leftChild]
 * @property {BSTNode} [rightChild]
 */
export class BSTNode {
    data;
    leftChild;
    rightChild;

    constructor(data, leftChild = null, rightChild = null) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

export class NodeBuilder {
    _data;
    _leftChild;
    _rightChild;

    /**
     *
     * @param {number} value
     * @returns The builder
     */
    withData(value) {
        this._data = value;
        return this;
    }

    withLeftChild(leftChild) {
        this._leftChild = leftChild;
        return this;
    }

    withRightChild(rightChild) {
        this._rightChild = rightChild;
        return this;
    }

    /**
     *
     * @returns {BSTNode} The node with all the designated properties.
     */
    build() {
        return new BSTNode(this._data, this._leftChild || null, this._rightChild || null);
    }
}

/**
 * @returns {NodeBuilder}
 */
export function someNode() {
    return new NodeBuilder();
}
