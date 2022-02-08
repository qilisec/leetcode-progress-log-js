//BFS
const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    let islandCount = 0;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === 1) {
          islandCount += 1;
          grid[row][col] = 0;
          const queue = [];
          queue.push([row, col]);
          while (queue.length) {
            const currentPos = queue.shift();
            const currentRow = currentPos[0];
            const currentCol = currentPos[1];
            for (let i = 0; i < directions.length; i++) {
              const currentDir = directions[i];
              const nextRow = currentRow + currentDir[0];
              const nextCol = currentCol + currentDir[1];
              if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;
              if (grid[nextRow][nextCol] === 1) {
                queue.push([nextRow, nextCol]);
                grid[nextRow][nextCol] = 0;
              }
            }
          }
        }
      }
    }
    return islandCount;
}
// Failed on "[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]". Expected output was 1 but actual output was 0.

//DFS
const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  
const dfs = function(grid, currentRow, currentCol) {
    if (currentRow < 0 || currentRow >= grid.length || currentCol < 0 || currentCol >= grid[0].length) {
        return
    };
    if (grid[currentRow][currentCol] === 1) {
      grid[currentRow][currentCol] = 0;
      for (let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const row = currentDir[0];
        const col = currentDir[1];
        dfs(grid, currentRow + row, currentCol + col);
      }
    }
}
  
var numIslands = function(grid) {
    if(!grid.length) {
        return 0
    };
    let islandCount = 0;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === 1) {
          islandCount++;
          dfs(grid, row, col);
        }
      }
    }
    return islandCount;
};
// Failed on "[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]". Expected output was 1 but actual output was 0.


// BFS
var numIslands = function(grid) {
    let countIslands = 0
    
    // this nested for loop would iterate throguh the entire grid to find anymore islands
    for (let i=0; i<grid.length; i++ ){
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] == "1") {
                countIslands++
                
                // bfs would spread to find more pieces of its current island, then make them all '0' so finding other islands would be easier
                bfs(grid, i, j)
            }
        }
    }
    return countIslands
};

function bfs(grid, r, c) {
    let totalRows = grid.length
    let totalCols = grid[0].length
    // use the positions as queues since that is where the bfs would spread
    let queue = [[r,c]]
    while (queue.length > 0) {
        let curr = queue.shift()
        let currRow = curr[0]
        let currCol = curr[1]
        // if its less than 0, its out of bounds, if its equal to to the total, then it is also out of bounds since arrays start at 0, while lengths starts at 1 if an element exists inside
        if (currRow < 0 || currRow == totalRows || currCol < 0 || currCol == totalCols) {
            continue
        }
        // if equal to 0 then continue since 0 is not apart of the islands
        if (grid[currRow][currCol] == '0') {
            continue
        }
        // if found an island/parts of an island, convert it to 0
        if (grid[currRow][currCol] == '1') {
            grid[currRow][currCol] = '0'
        }
        // looks in all directions if found an island/parts of an island
        queue.push([currRow+1, currCol])
        queue.push([currRow-1, currCol])
        queue.push([currRow, currCol+1])
        queue.push([currRow, currCol-1])
    }
}
// Passed. Faster than 26.16% of submissions. Less memory than 26.38% of submissions.
