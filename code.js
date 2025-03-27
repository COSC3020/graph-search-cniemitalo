function depthFirstSearch(graph, startNode, targetNode) {
    //track which nodes have been visited and the path travelled
    let visited = []; 
    let path = []; 

    //if the graph is not empty and the node is in the graph, return the path
    //else return empty array 
    if ((graph.length !== 0) && (search(graph, startNode, targetNode, visited, path))) {
        return path; 
    } else {
        return []; 
    }

}

function search(graph, current, target, visited, path) {
    //add the current node to visited and path
    visited.push(current); 
    path.push(current); 

    if (current === target) {
        return true; 
    }

    //search through the current nodes edges 
    for (let i = 0; i < graph[current].length; i++) {
        let node = graph[current][i]; 

        //if the next edge hasn't already been visited
        //recursively search through the graph for connected node 
        if (!visited.includes(node) && search(graph, node, target, visited, path)) {
            //return true to depthFirst search if the targetNode is found 
            return true;
        } 
    }
    
    //delete the previous node from the path to backtrack 
    path.pop(); 
    return false;  
}

