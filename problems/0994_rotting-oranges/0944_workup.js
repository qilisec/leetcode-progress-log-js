const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;
  
  
var orangesRotting = function(grid) {
    if (grid.length === 0) return 0;
    const queue = [];  
    let freshOranges = 0;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === ROTTEN) {
          queue.push([row, col])
        }
        if (grid[row][col] === FRESH) {
          freshOranges++;
        }
      }
    }
    let minutes = 0;
    let currentQueueSize = queue.length;
    while (queue.length > 0) {
      if (currentQueueSize === 0) {
        currentQueueSize = queue.length;
        minutes++;
      }
      const currentOrange = queue.shift();
      currentQueueSize--;
      const row = currentOrange[0];
      const col = currentOrange[1];
      for (let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const nextRow = row + currentDir[0];
        const nextCol = col + currentDir[1];
        if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) {
          continue;
        }
        if (grid[nextRow][nextCol] === FRESH) {
          grid[nextRow][nextCol] = 2;
          freshOranges--;
          queue.push([nextRow, nextCol]);
        }
      }
    }
    if (freshOranges !== 0) {
      return -1;
    }
    return minutes;
};
// Passed. Faster than 86.43% of submissions. Less memory usage than 90.67% of submissions.