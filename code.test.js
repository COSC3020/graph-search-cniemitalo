const fs = require('fs'); 
const jsc = require('jsverify'); 

eval(fs.readFileSync('code.js')+''); 

// used Ishita Patel's repository as inspiration for how to provide tests

let emptyGraph = []; 
let graph1 = [[1, 2], [3], [], []]; 
let graph2 = [[1], [2], [0, 3], []]; 
let graph3 = [[1, 2], [3], [3], []]; 
let graph4 = [[1], [2], [], [4], []]; 
let graph5 = [[0]]; 
let graph6 = [[1, 2, 3], [4], [4, 5], [5], [6], [6], []]; 


jsc.assert(JSON.stringify(depthFirstSearch(emptyGraph, 0, 0)) == JSON.stringify([]));
jsc.assert(JSON.stringify(depthFirstSearch(emptyGraph, 3, 7)) == JSON.stringify([]))
jsc.assert(JSON.stringify(depthFirstSearch(graph1, 0, 3)) == JSON.stringify([0, 1, 3])); 
jsc.assert(JSON.stringify(depthFirstSearch(graph1, 1, 2)) == JSON.stringify([]); 
jsc.assert(JSON.stringify(depthFirstSearch(graph2, 0, 3)) == JSON.stringify([0, 1, 2, 3])); 
jsc.assert(JSON.stringify(depthFirstSearch(graph2, 3, 0)) == JSON.stringify([])); 
jsc.assert(JSON.stringify(depthFirstSearch(graph3, 2, 3)) == JSON.stringify([2, 3])); 
jsc.assert(JSON.stringify(depthFirstSearch(graph3, 1, 0)) == JSON.stringify([]));  
jsc.assert(JSON.stringify(depthFirstSearch(graph4, 0, 2)) == JSON.stringify([0, 1, 2])); 
jsc.assert(JSON.stringify(depthFirstSearch(graph4, 3, 2)) == JSON.stringify([]); 
jsc.assert(JSON.stringify(depthFirstSearch(graph5, 0, 0)) == JSON.stringify([0])); 
jsc.assert(JSON.stringify(depthFirstSearch(graph6, 0, 6)) == JSON.stringify([0, 1, 4, 6]); 
jsc.assert(JSON.stringify(depthFirstSearch(graph6, 5, 3)) == JSON.stringify([]); 
