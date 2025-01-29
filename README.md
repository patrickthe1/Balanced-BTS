# Balanced Binary Search Tree Implementation

This repository contains an implementation of a balanced binary search tree (BST) in JavaScript. The tree is designed to efficiently store, retrieve, and manage key-value pairs while maintaining balance for optimal performance.

## Table of Contents

- [Features](#features)
- [Methods](#methods)
- [Usage Example](#usage-example)
- [Installation](#installation)
- [License](#license)

## Features

- Supports insertion, deletion, and searching of nodes.
- Automatically balances the tree when unbalanced.
- Provides efficient traversal methods: level order, in-order, pre-order, and post-order.
- Calculates the height and depth of nodes.
- Checks if the tree is balanced.
- Visual representation of the tree structure using a pretty print method.

## Methods

- `insert(value)`: Adds a key-value pair to the tree.
- `deleteItem(value)`: Removes a key-value pair from the tree.
- `find(value)`: Retrieves the value associated with a given key.
- `height(node)`: Returns the height of the specified node.
- `depth(node)`: Returns the depth of the specified node.
- `isBalanced()`: Checks if the tree is balanced.
- `rebalance()`: Rebalances the tree if it is unbalanced.
- `levelOrder(callback)`: Traverses the tree in level order and applies the callback to each node.
- `inOrder(callback)`: Traverses the tree in in-order and applies the callback to each node.
- `preOrder(callback)`: Traverses the tree in pre-order and applies the callback to each node.
- `postOrder(callback)`: Traverses the tree in post-order and applies the callback to each node.
- `prettyPrint(node)`: Prints the tree structure in a visually appealing format.

## Usage Example

```javascript
// Import the Tree class
const { Tree } = require('./projects/Balanced-BST/bts.js');

// Create a binary search tree from an array of random numbers
const bst = new Tree([10, 5, 15, 3, 7, 12, 20]);

// Check if the tree is balanced
console.log("Is the tree balanced?", bst.isBalanced());

// Print elements in different orders
console.log("Level Order:");
bst.levelOrder(node => console.log(node.data));

console.log("In Order:");
bst.inOrder(node => console.log(node.data));

// Unbalance the tree
bst.insert(101);
bst.insert(102);
console.log("Is the tree balanced after adding numbers > 100?", bst.isBalanced());

// Rebalance the tree
bst.rebalance();
console.log("Is the tree balanced after rebalancing?", bst.isBalanced());
```

## Installation

To use the Balanced Binary Search Tree implementation, clone this repository and include the respective files in your project. You can then require or import them as shown in the usage example.

```bash
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.