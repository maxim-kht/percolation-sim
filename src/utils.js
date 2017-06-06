class UnionFind {
  constructor(grid) {

  }
}

export function populateNeighbors(grid, height, width) {
  grid.forEach(element => {
    let { i, j } = element;

    element.northLimit = (i === 0);
    element.southLimit = (i === height - 1);
    element.westLimit  = (j === 0);
    element.eastLimit  = (j === width - 1);

    element.neighbors = [];

    if (!element.northLimit) {
      element.neigbors.push(grid.filter(elem => elem.i === i - 1 && elem.j === j)[0]);
    }
    if (!element.southLimit) {
      element.neigbors.push(grid.filter(elem => elem.i === i + 1 && elem.j === j)[0]);
    }
    if (!element.westLimit) {
      element.neigbors.push(grid.filter(elem => elem.i === i && elem.j === j - 1)[0]);
    }
    if (!element.eastLimit) {
      element.neigbors.push(grid.filter(elem => elem.i === i && elem.j === j + 1)[0]);
    } 
  });

  return grid;
}

export function openElement(grid, key) {
  const uf = new UnionFind(grid);

  const element = grid.filter(element => element.key === key)[0];
  element.state = 'opened';

  if (element.northLimit) {
    // Connect to top
    uf.union(element, grid[0]);
  } else if (element.southLimit) {
    // Connect to bottom
    uf.union(element, grid[grid.length - 1]);
  }

  element.neighbors
      .filter(neighbor => neighbor.state === 'opened')
      .forEach(neighbor => uf.union(element, neighbor));

  return element;
}

export function checkPercolation(grid) {
  const uf = new UnionFind(grid);

  grid.filter(element => element.state === 'opened')
      .forEach(element => {
        if (uf.connected(element, grid[0])) {
          element.state = 'filled';
        }
      });
}
