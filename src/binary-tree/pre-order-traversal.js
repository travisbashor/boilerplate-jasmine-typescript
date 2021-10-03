/**
 * @typedef BSTNode
 * @property {number} data The data associated with this node.
 * @property {BSTNode} [leftChild] The left child of this node, if present.
 * @property {BSTNode} [rightChild] The right child of this node, if any.
 */

/**
 *
 * @param {BSTNode} root
 * @returns
 */
export function preOrder(root) {
    if (!root) {
        return [];
    }

	/**
	 * @type {number[]}
	 */
    const data = [];

    // Root.
    data.push(root.data);

    // Left.
    data.push(...preOrder(root.leftChild));

    // Right.
    data.push(...preOrder(root.rightChild));

    return data;
}
