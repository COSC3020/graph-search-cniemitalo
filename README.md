# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst-case scenario for depthFirstSearch would be if the targetNode did not exist within the graph, or was the last node the program could possibly check. In both of these cases, the program has to iterate through every other possible combination, and exhaustively search through the nodes and their edges, backtracking when required. This would put the worst-case at iterating through all vertices in the graph and therefore all the edges in the graph, |V| + |E|. Thus, the runtime complexity would be $\Theta(|V| + |E|)$. 


### Sources and Plagiarism 

Sources: 

https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

I based my testing code off of Ishita Patel's, as well as a few of the unit tests we briefly discussed in class. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Bonus

Implement and analyze breadth-first search.
