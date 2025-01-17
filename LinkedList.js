function LinkedList() {

	let startNode = null;
	let lastNode = null;

	function add(value) {
		const newNode = Node(value, null);

		if (lastNode == null && startNode == null) {
			startNode = newNode
			lastNode = newNode
			

		} else {
		
			lastNode.setNextNode(newNode)
			lastNode = newNode

		}
	}

	function count(){
		let length = 0
		let loopNode = startNode;
		while(loopNode){
			length++
			loopNode = loopNode.getNextNode()
		}
		return length
	}

	function clear() {
		startNode = null
		lastNode = null
	}

	function contains(value) {
		
		let loopNode = startNode;
		while(loopNode){
			if(loopNode.getValue() == value){
				return true
			}
			loopNode = loopNode.getNextNode()
		}
		return false
	}

	function forEach(fn) {
		let loopNode = startNode;
		while(loopNode){
			fn(loopNode.getValue())
			
			loopNode = loopNode.getNextNode()
		}
	}

	function first() {
		return startNode.getValue()
	}

	function last() {
		return lastNode.getValue()
	}

	return {
		add,
		clear,
		contains,
		count,
		first,
		last,
		forEach
	}
}