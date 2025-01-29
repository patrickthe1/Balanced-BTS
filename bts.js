// The Node class represents a single node in a binary search tree (BST).
// Each node contains data and pointers to its left and right children.

class Node {
    constructor(data) {
        this.data = data; // Store the value of the node
        this.left = null; // Initialize left child as null
        this.right = null; // Initialize right child as null
    }
}

//Tree class to represent the binary search tree
class Tree {
    constructor(array) {
        this.root = this.buildTree(array); // Initialize the root using buildTree
    }

    buildTree(array) {
        const uniqueSortedArray = [...new Set(array)].sort((a,b) => a - b);

        const build = (start, end) => {
            if (start > end) return null // Base case 

            const mid = Math.floor((start + end) / 2);
            const node = new Node(uniqueSortedArray[mid]);

            //recursively build the left and right subtrees
            node.left = build(start,mid -1);
            node.right = build(mid +1, end);

            return node // Return the created node
        };

        return build(0, uniqueSortedArray.length -1); // start building from the full range
    };

 
     
    insert(value) {
        const insertNode = (node , value) => {
            if(node === null) {
                return new Node(value); //Create a new node if position is empty
            }

            if(value < node.data) {
                node.left = insertNode(node.left,value); // insert in the left subtree
            } else if (value > node.data) {
                node.right = insertNode(node.right,value);// insert in the right subtree
            }
            return node; // Return the unchanged node pointer
        };
        this.root = insertNode(this.root,value)
      }

      deleteItem(value) {
        const deleteNode = (node, value) => {
            if(node === null) {
                return null; //Base case: value not found
            }
            if (value < node.data) {
                node.left = deleteNode(node.left,value);
            } else if (value > node.data) {
                node.right = deleteNode(node.right,value);
            } else {
                //Node with value found
                if (node.left === null){
                    return node.right; // Node with only right child or no child
                 } else if (node.right === null) {
                    return node.left; //Node with only left child 
                 }
                  // Node with two children: Get the inorder successor (smallest in the right subtree)
                let minLargerNode = this.findMin(node.right);
                node.data = minLargerNode.data; // Replace value with the inorder successor
                node.right = deleteNode(node.right, minLargerNode.data); // Delete the inorder successor
            }
            return node; // Return the unchanged node pointer
            };

            this.root = deleteNode(this.root,value); //start deletion from root
        }

        find(value) {
            const findNode = (node,value) => {
                if (node === null) {
                    return null; //Base case: value not found
                }
                if (value < node.data) {
                    return findNode(node.left,value)
                } else if (value > node.data) {
                    return findNode(node.right,value)
                } else {
                    return Node; //Node with the value found
                };
            };
            return findNode(this.root,value); //Start search from the root
        }

        findMin(node) {
            while (node.left !== null) {
                node = node.left; // Traverse to the leftmost node
            }
            return node; // Return the minimum node
        }

        levelOrder(callback) {
            if(typeof callback !== 'function') {
                throw new Error('A callback function is expected')
            }

            const queue = []; //Initialize a queue to keep track of nodes;
            queue.push(this.root); //start with the root node

            const traverse = () => {
                if(queue.length === 0) return; //Base case: if the queue is empty stop;

                const currentNode = queue.shift(); //Dequeue the first node
                callback(currentNode); //Call the callback with the current node

                //enqueue the left and right children if they exist
                if(currentNode.left) {
                    queue.push(currentNode.left);
                }
                
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }

                traverse(); //Recursive call to continue the traversal
            }
            traverse(); //start the traversal
        };

        inOrder(callback){
            if(typeof callback !== 'function'){
                throw new Error('A callback function is expected');
            }

            const traverse = (node) => {
                if(node === null) return; //Base case
                traverse(node.left); //Traverse the  left subtree
                callback(node); //call the callback with the current node
                traverse(node.right); //Traverse the right subtree
            };
            traverse(this.root); //start the traversal from the root
        }

        preOrder(callback) {
            if(typeof callback !== 'function') {
                throw new Error('A function is expected');
            }

            const traverse = (node) => {
                if(node === null) return; //Base case
                callback(node); //Call the callback with the current node
                traverse(node.left); //traverse the left subtree
                traverse(node.right); //Traverse the right subtree
            };
            traverse(this.root); //start the traversal from the root
        }

        postOrder(callback){
            if(typeof callback !== 'function'){
                throw new Error('A function is expected');
            }
            const traverse = node => {
                if(node === null) return; //Base case;
                traverse(node.left)// Traverse the left subtree
                traverse(node.right)//traverse the right subtree
                callback(node); // Call the callback with the current node
            };
            traverse(this.root); //start the traversal from the root
        }

        height(node) {
            if (node === null) {
                return -1; // Base case: height of null node is -1
            }

            // Recursively calculate the height of left and right subtrees
            const leftHeight = this.height(node.left);
            const rightHeight = this.height(node.right);

            // The height of the current node is the greater of the two heights plus one
            return Math.max(leftHeight, rightHeight) + 1;
        }

        depth(node) {
            if (node === null) {
                return -1; // Base case: depth of null node is -1
            }

            let current = this.root; // Start from the root
            let depthCount = 0; // Initialize depth count

            // Traverse the tree to find the node
            while (current !== null) {
                if (node.data < current.data) {
                    current = current.left; // Move to the left child
                } else if (node.data > current.data) {
                    current = current.right; // Move to the right child
                } else {
                    return depthCount; // Node found, return the depth
                }
                depthCount++; // Increment depth count for each edge traversed
            }

            return -1; // If the node is not found, return -1
        }

        isBalanced(){
            const checkBalance = (node) => {
                if(node === null) {
                    return 0; //Base case: height of null node is 0
                }

                //Recursively check the height of left and right subtrees
                const leftHeight = checkBalance(node.left);
                const rightHeight = checkBalance(node.right);

                //If the subtree is unbalanced, return -1
                if(leftHeight === -1 || rightHeight === -1){
                    return -1;
                }

                //Check if the current node is balanced
                if (Math.abs(leftHeight - rightHeight) > 1) {
                    return -1 //current node is unbalanced
                }

                //Return the height of the current node
                return Math.max(leftHeight,rightHeight) + 1;
            };

            return checkBalance(this.root) !== -1; //If the return value is -1, the tree is uunbalanced
        }

        rebalance() {
            const values = []; // Array to hold the values

            // Helper function to perform in-order traversal and collect values
            const inOrderTraversal = (node) => {
                if (node === null) return; // Base case
                inOrderTraversal(node.left); // Traverse left subtree
                values.push(node.data); // Collect node value
                inOrderTraversal(node.right); // Traverse right subtree
            };

            inOrderTraversal(this.root); // Start in-order traversal from the root

            // Build a new balanced tree using the collected values
            this.root = this.buildTree(values); // Rebuild the tree
        }

        prettyPrint = (node, prefix = "", isLeft = true) => {
            if (node === null) {
                return;
            }
            if (node.right !== null) {
                this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
            if (node.left !== null) {
                this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
            }
        };
    }

    module.exports = { Tree };



