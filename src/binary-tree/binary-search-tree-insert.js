/**
 * @typedef {BSTNode}
 * @property {number} data
 * @property {BSTNode} leftChild
 * @property {BSTNode} rightChild
 *
 */

import { someNode } from './swap-nodes';

/**
 * @param {BSTNode} node
 * @param {number} data
 *
 * @returns {BSTNode} The root node of the updated BST.
 */
export function insert(node, data) {
    if (!node) {
        return someNode().withData(data).build();
    }

    if (data > node.data) {
        node.rightChild = insert(node.rightChild, data);
    }

    if (data < node.data) {
        node.leftChild = insert(node.leftChild, data);
    }

    return node;
}
