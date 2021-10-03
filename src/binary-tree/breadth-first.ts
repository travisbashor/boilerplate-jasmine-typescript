import { BSTNode } from "./height-of-binary-tree";

export function levelOrder(root: BSTNode, separator: string = ' '): string {
	const nodesToVisit: BSTNode[] = [];
	const data: number[] = [];

	nodesToVisit.push(root);

	while (nodesToVisit.length > 0) {
		// Pull the next node out.
		const currentNode = nodesToVisit.shift();

		// Add its data do data.
		data.push(currentNode.data);

		// Add its children to the itinerary.
		if (!!currentNode.leftChild) {
			nodesToVisit.push(currentNode.leftChild);
		}

		if (!!currentNode.rightChild) {
			nodesToVisit.push(currentNode.rightChild);
		}

	}

	return data.join(separator);
}