
//stack.push("Andre");
//stack.push("Busi");

// console.log(stack.pop())   -- Busi
// console.log(stack.pop())   -- Andre

// how would u implement this using a linked list

function Stack() {
	let topNode = null;

	function push (value) {
		const newNode = Node(value, null);
		// if topNode is null - make the new Node the topNode
		if (topNode == null) {
			topNode = newNode;
		} else {
			// if there is already a topNode - what should happen to newNode ?
			// should the newNode become the topNode...
			newNode.setNextNode(topNode);
			topNode = newNode
		}
	}

	function pop() {

		if (topNode) {

			const poppedValue = topNode.getValue();
			// take the value of the the stack
			const newTopNode = topNode.getNextNode();
			topNode = newTopNode;
			return poppedValue;

		}

	}

	return {
		push,
		pop
	}
}