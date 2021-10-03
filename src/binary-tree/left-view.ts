import { BSTNode } from "./height-of-binary-tree";

export function leftView(root: BSTNode): string {
	if (!root) {
		return '';
	}

	const dataVisibleFromTheLeft: number[] = [];

	// Do a level-order traversal, but only print the first datum from each level.
	const nodesToVisit: BSTNode[] = [];
	root.visited = true;

	nodesToVisit.push(root);

	while (nodesToVisit.length > 0) {
		// Visit some nodes.
		const currentNode = nodesToVisit.shift();
		currentNode.visited = true;

		dataVisibleFromTheLeft.push(currentNode.data);

		if (!!currentNode.leftChild) {
			if (!currentNode.leftChild.visited) {
				nodesToVisit.push(currentNode.leftChild);
			}
		} else if (!!currentNode.rightChild) {
			if (!currentNode.rightChild.visited) {
				nodesToVisit.push(currentNode.rightChild);
			}
		}
	}

	return dataVisibleFromTheLeft.join(' ');
}