function Queue() {
	let lastNode = null;
    let startNode = null;

	function enqueue(value) {
		const newNode = Node(value, null);
		// if lastNode is null - make the new Node the lastNode
		if (lastNode == null && startNode == null) {
			startNode = newNode
			lastNode = newNode
			// endNode & startNode == newNode;
		} else {
			// if there is already a topNode - what should happen to newNode ?
			// should the newNode become the topNode...
			lastNode.setNextNode(newNode);
			lastNode = newNode
		}

	}

	function dequeue() {
		// return a value
		if (startNode) {

			const nextValue = startNode.getValue();
			// take the value of the the stack
			const newNextNode = startNode.getNextNode();
			startNode = newNextNode;
			return nextValue;

		}
	}

		return {
			enqueue,
			dequeue
	}
}
