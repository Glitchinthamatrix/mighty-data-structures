//PS: it depends on the kind of data-strcuture you are using to store the children(not the biological ones), whether it is LIFO or FIFO
//the recursive functions use the built-in call-stack so they inherently solve the tree-traversal problems "the depth first" way
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

var left = a.left;

//          a
//         / \
//        b   c
//       /\    \
//      d  e    f

//////--------------depth frst traversal-----------------
// const DFS = (root) => {
//     var stack = [root];
//     var results = [];
//     while (stack.length > 0) {
//         var current = stack.pop();
//         results.push(current.val)
//         console.log('current: ', current.val)
//         if (current.left) {
//             stack.push(current.left);
//         }
//         if (current.right) {
//             stack.push(current.right);
//         }
//     }
//     return results;
// }

// ----same thing with with recursion

// function DFS(root) {
//     if (!root) {
//         return []
//     }
//     console.log("root is ", root);
//     var leftValues = DFS(root.left);
//     var rightValues = DFS(root.right);
//     return [root.val, ...leftValues, ...rightValues]
// }
// console.log("results: ", DFS(a));


///////////-----------breadth/width first traversal------------////////////

// const BFS = (root) => {
//     var queue = [root];
//     var results = [];
//     while (queue.length > 0) {
//         var current = queue.shift();
//         results.push(current.val)
//         console.log('current: ', current.val)
//         if (current.left) {
//             queue.push(current.left);
//         }
//         if (current.right) {
//             queue.push(current.right);
//         }
//     }
//     return results;
// }

// ----same thing with with recursion

// function BFS(root) {
//     if (!root) {
//         return []
//     }
//     console.log("root is ", root);
//     var leftValues = BFS(root.left);
//     var rightValues = BFS(root.right);
//     return [root.val, ...leftValues, ...rightValues]
// }
// console.log("results: ", BFS(a));


//breadth-first recursive algo checks if the tree has avalue----------------
//can also use the iterative approach and check on every iteration if target is found

// const treeIncludes = (root, target) => {
//     console.log('current value: ', root ? root.val : null)
//     if (root === null) return false; ///the simplest case first
//     if (root.val === target) return root; //the second simplest case
//     return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// }

// console.log('does tree have f ', treeIncludes(a, 'f'));


////------------------ summing the values of trees ---------------
//the recursive way
// const treeSum = (root) => {
//     if (root === null) return ''; //replace the empty string with 0 if your nodes have ints/floats
//     return root.val + treeSum(root.left) + treeSum(root.right);
// };
// //you can also solve this problem the iterative way by iterating through the nodes and incrementing a "total" value by the numeric values of nodes and returning the total in the end
// console.log('sum of all the letters in the tree : ', treeSum(a));


/////------------get the smallest value in tree-------------------
// const getMin = (root) => {
//     var smallest = Infinity;
//     var stack = [root];
//     while (stack.length > 0) {
//         var current = stack.pop();
//         if (current.val.charCodeAt(0) < smallest) {
//             smallest = current.val.charCodeAt(0);
//         }
//         if (current.left) stack.push(current.left);
//         if (current.right) stack.push(current.right);
//     }
//     return String.fromCharCode(smallest);
// }
//same with recursion -----------------------------
// const getMin = (root) => {
//     if (root === null) return Infinity;
//     if (root !== null) return root.val.charCodeAt(0);
//     const leftMin = getMin(root.left);
//     const rightMin = getMin(root.right);
//     var smallest = Math.min(root.val, leftMin, rightMin);
//     return String.fromCharCode(smallest);
// }
// console.log("'" + getMin(a) + "'" + " has the smallest ascii value");



///-------------get the longest path from root  
