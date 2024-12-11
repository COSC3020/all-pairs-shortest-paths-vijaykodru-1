# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all *pairs* of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:
- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
    - for each vertex $i\in V$:
        - for each vertex $j\in V$:
            - `if dist[i][j] > dist[i][k] + dist[k][j]:`
              `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file.

The runtime complexity for the implemented code is $\Theta(|V^3|)$. This is because the initialization of the distance matrix with diagnal being 0 takes $\Theta(|V|)$ time complexity, next the code sets the ditance matrix between every pair of vertices to be infinity uses a nested loop resulting $\Theta(|V^2|)$ time complexity. Finally iterating over all pairs of vertices takes $\Theta(|V^3|)$ time complexity because of the triple nested loop. Together the time complexity becomes $\Theta(|V^2| + |V^3| + |V|)$. This simplifies to be $\Theta(|V^3|)$ time complexity 


Reference:

https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/

The above website gave me good unstanding of the implementation of the algorithm. However I used my dijkstra's algorithm I implemented to get started and changed it according to the pseudo code give to complete floyd warshall's algorithm.