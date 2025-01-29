// Import the Tree and Node classes from your bts.js file
const { Tree } = require('./bts.js');

// Function to generate an array of random numbers less than 100
function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

// Create a binary search tree from random numbers
const randomNumbers = generateRandomNumbers(10); // Generate 10 random numbers
const bst = new Tree(randomNumbers);

// Confirm that the tree is balanced
console.log("Is the tree balanced?", bst.isBalanced());

// Print all elements in different orders
console.log("Level Order:");
bst.levelOrder(node => console.log(node.data));

console.log("Pre Order:");
bst.preOrder(node => console.log(node.data));

console.log("Post Order:");
bst.postOrder(node => console.log(node.data));

console.log("In Order:");
bst.inOrder(node => console.log(node.data));

// Unbalance the tree by adding several numbers > 100
const unbalancedNumbers = [101, 102, 103, 104, 105];
unbalancedNumbers.forEach(num => bst.insert(num));

// Confirm that the tree is unbalanced
console.log("Is the tree balanced after adding numbers > 100?", bst.isBalanced());

// Balance the tree
bst.rebalance();

// Confirm that the tree is balanced
console.log("Is the tree balanced after rebalancing?", bst.isBalanced());

// Print all elements in different orders after rebalancing
console.log("Level Order after rebalancing:");
bst.levelOrder(node => console.log(node.data));

console.log("Pre Order after rebalancing:");
bst.preOrder(node => console.log(node.data));

console.log("Post Order after rebalancing:");
bst.postOrder(node => console.log(node.data));

console.log("In Order after rebalancing:");
bst.inOrder(node => console.log(node.data));