function allPairsShortestPaths(graph) {
    const V = graph.length;
    // Initialize the distance matrix with infinity
    let dist = Array.from({ length: V }, () => Array(V).fill(Infinity));

    // Set the diagonal to 0
    for (let i = 0; i < V; i++) {
        dist[i][i] = 0;
    }

    // Initialize the distances for direct edges
    for (let u = 0; u < V; u++) {
        for (let v = 0; v < V; v++) {
            if (graph[u][v] !== undefined) {  // Ensure there's an edge
                dist[u][v] = graph[u][v];
            }
        }
    }

    // Perform the Floyd-Warshall updates
    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

module.exports = { allPairsShortestPaths };