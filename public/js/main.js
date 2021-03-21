'use strict';

// we have a map that is n * n size (5 * 5)
// let's say the 4 corners of the map is set to 0
// each cell has a number that represents the height of the region
// if the height is higher than the 4 surrounded region, the region is regarded as the mountain top
// how many mountain tops does this map have?

function solution(map) {

  // 1. my way: add 4 corners(0)
	let countMountains = 0;
	let n = map.length;
  
  // add 0 for 4 corners (makes the map 7 * 7)
	for (let i = 0; i < n; i++) {
    map[i].unshift(0);
		map[i].push(0);
	}
  
  let newRow1 = Array.from({length: n + 2}, () => 0);
	let newRow2 = Array.from({length: n + 2}, () => 0);
	map.unshift(newRow1);
	map.push(newRow2);
  
  // diagnose which region(cell) is the mountain top (from 5 * 5 map)
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (map[i][j] > map[i-1][j] && map[i][j] > map[i][j-1] && map[i][j] > map[i][j+1] && map[i][j] > map[i+1][j]) countMountains++;
		}
	}

	return countMountains;  // 10

  // 2. simpler way: use array for x / y location
  let countMountains = 0;
  let n = map.length;

  let moveRow = [-1, 0, 1, 0];
  let moveCell = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      let isMountainTop = true;

      for (let k = 0; k < moveRow.length; k++) {
        let newRow = i + moveRow[k];
        let newCell = j + moveCell[k];
        
        if (newRow >= 0 && newRow < n && newCell >= 0 && newCell < n && map[i][j] <= map[newRow][newCell]) isMountainTop = false;
      }

      if (isMountainTop === true) countMountains++;
    }
  }
  return countMountains;  // 10
}

let map = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4], 
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2]
];
console.log(solution(map)); 