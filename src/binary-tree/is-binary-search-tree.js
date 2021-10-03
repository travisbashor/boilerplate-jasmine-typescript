/**
 *
 * @typedef {BSTNode}
 * @property {number} data
 * @property {BSTNode} [leftChild];
 * @property {BSTNode} [rightChild];
 *
 */

/**
 *
 * @param {BSTNode} node
 * @returns Whether the tree passed into this function is a binary search tree.
 * 		1
 * 	2		3
 */
export function isBinarySearchTree(node) {
    if (!node) {
        return true;
    }

    if (!node.leftChild && !node.rightChild) {
        return true;
    }

    if (node.leftChild?.data >= node.data) {
        return false;
    }

    if (node.rightChild?.data <= node.data) {
        return false;
    }

    return isBinarySearchTree(node.leftChild) && isBinarySearchTree(node.rightChild);
}
