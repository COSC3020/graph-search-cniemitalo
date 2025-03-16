const fs = require('fs'); 
const jsc = require('jsverify'); 

eval(fs.readFileSync('code.js')+''); 

function convertListToMatrix(edges, maxNode) {
    const mat = []; 
    for (let i = 0; i <= maxNode; i++) {
        for (let j = 0; j <= maxNode; j++) {
            mat[i][j] = 0; 
        }
    }
    edges.forEach(edge => {
        mat[edge[0]][edge[1]] = 1; 
    }); 

    return mat; 
}

const test = jsc.forall("array (pair nat nat)", function(edges) {
    let maxNode = edges.reduce(function(a, b) {return Math.max(a, Math.max(b[0], b[1])); }, 0); 
    let adjMatrix = convertListToMatrix(edges, maxNode);

    const startNode = Math.floor(Math.random() * (maxNode + 1)); 
    const endNode = Math.floor(Math.random() * (maxNode + 1)); 
    const result = depthFirstSearch(adjMatrix, startNode, endNode); 
  
    return typeof result === 'boolean'; 
})

jsc.assert(test, { tests: 1000 }); 