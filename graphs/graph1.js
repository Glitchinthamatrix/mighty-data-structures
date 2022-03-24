var graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//           visual representation of the above graph
//                c--e
//                |
//                a--b--d--f
//
//
//

//-----------DEPTH FIRST GRAPH TRAVERSAL-------------------
//iterative graph traversal
const DFS = (graph, start) => {
    const stack = [start];
    while (stack.length) {
        var current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

//recursive graph traversion
// const DFS = (graph, start) => {
//     console.log(start);
//     for (let neighbor of graph[start]) {
//         DFS(graph, neighbor);
//     }

// }
DFS(graph, 'a');

//---------------BREADTH FIRST TRAVERSAL----------------------
//ITERATIVE APPROACH
// const BFS = (graph, start) => {
//     const queue = [start];
//     while (queue.length) {
//         var current = queue.shift();
//         console.log(current);
//         for (let neighbor of graph[current]) {
//             queue.push(neighbor);
//         }
//     }
// }
// BFS(graph, 'a');
//RECURSIVE APPROACH  -- recursion run with the help of the underlying call STACK, so there's probably no solution to recursive traversal with queues

//iterative approach of checking if the graph has path to a specific element
// const hasPath = (graph, start, dest) => {
//     if (start === dest) return true;
//     for (let neighbor of graph[start]) {
//         if (hasPath(graph, neighbor, dest)) {
//             return true
//         }
//     }
//     return false;
// }
// console.log(hasPath(graph, 'a', 'f'));

// const hasPath = (graph, start, dest) => {
//     const queue = [start];
//     while (queue.length) {
//         var current = queue.shift();
//         if (current === dest) return true;
//         console.log(current);
//         for (let neighbor of graph[current]) {
//             queue.push(neighbor);
//         }
//     }
//     return false;
// }
// console.log(hasPath(graph, 'a', 'f'));