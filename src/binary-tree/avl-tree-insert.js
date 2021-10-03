/**
 * @typedef {BSTNode}
 * @property {number} data
 * @property {BSTNode} leftChild
 * @property {BSTNode} rightChild
 *
 * @param {BSTNode} rootNode
 * @param {number} data
 * @returns
 */

import { someNode } from './swap-nodes';

export function avlInsert(rootNode, data) {
    return rootNode;
}

/**
 *
 * @param {BSTNode} rootNode
 * @param {number} data
 * @returns
 */
export function insert(rootNode, data) {
    if (!rootNode) {
        return someNode().withData(data).build();
    }

	if (data < rootNode.d) {

    }
}

/**
 *
 * @param {BSTNode} rootNode
 * @returns {number} The height of the tree that has the given node as the root.
 */
export function getHeight(rootNode) {
    if (!rootNode) {
        return 0;
    }

    if (!rootNode.leftChild && !rootNode.rightChild) {
        return 0;
    }

    return 1 + Math.max(getHeight(root.leftChild), getHeight(root.rightChild));
}
