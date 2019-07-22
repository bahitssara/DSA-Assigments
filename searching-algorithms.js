class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }

    bfs(values=[]) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)

        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }
}


let binarySearch = (array, value, start, end) => {
	let start = start || 0
	let end = end || array.length

	if (start > end) {
		return -1
    }

    // picking index in the middle of the start and end indices; if you haven't found the item, recursively search in either left or right half.
	let index = Math.floor((start + end) / 2)
	let item = array[index]

	console.log(start, end)
	if (item == value) {
		return index
	} else if (item < value) {
		return binarySearch(array, value, index + 1, end)
	} else if (item > value) {
		return binarySearch(array, value, start, index - 1)
	}
}

// Best case: O(1)
// Average & worst case: O(n)

let indexOf = (array, value) => {
	for (let i=0; i<array.length; i++) {
		if (array[i] == value) {
			return i
		}
	}
	return -1
}
binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8)
