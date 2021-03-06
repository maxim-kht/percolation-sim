class UnionFind {
  constructor(grid) {
    this.grid = grid;
  }

  root(i) {
    while (i !== this.grid[i].unionId) {
      i = this.grid[i].unionId;
    }
    return i;
  }

  union(element1, element2) {
    let i = this.root(element1.key);
    let j = this.root(element2.key);
    this.grid[i].unionId = j;
  }

  connected(element1, element2) {
    return this.root(element1.key) === this.root(element2.key);
  }
}

export function createGrid(height, width) {
  let grid = [];
  // First element, top virtual emenent
  grid.push({
    key: 0,
    unionId: 0,
    state: 'filled',
    type: 'virtual',
  });
  // Grid elements
  let key = 1;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      grid.push({ key, i, j, unionId: key, state: 'filled' });
      key++;
    }
  }
  // Last element, bottom virtual element
  grid.push({
    key: key,
    unionId: key,
    state: 'opened',
    type: 'virtual',
  });

  return grid;
}

export function populateNeighbors(grid, height, width) {
  grid.filter(element => element.type !== 'virtual').forEach(element => {
    let { i, j } = element;

    element.northLimit = (i === 0);
    element.southLimit = (i === height - 1);
    element.westLimit  = (j === 0);
    element.eastLimit  = (j === width - 1);

    element.neighbors = [];

    if (!element.northLimit) {
      element.neighbors.push(grid.filter(elem => elem.i === i - 1 && elem.j === j)[0].key);
    }
    if (!element.southLimit) {
      element.neighbors.push(grid.filter(elem => elem.i === i + 1 && elem.j === j)[0].key);
    }
    if (!element.westLimit) {
      element.neighbors.push(grid.filter(elem => elem.i === i && elem.j === j - 1)[0].key);
    }
    if (!element.eastLimit) {
      element.neighbors.push(grid.filter(elem => elem.i === i && elem.j === j + 1)[0].key);
    } 
  });

  return grid;
}

export function openElement(grid, element) {
  const uf = new UnionFind(grid);

  element.state = 'opened';

  if (element.northLimit) {
    // Connect to top
    uf.union(element, grid[0]);
  } else if (element.southLimit) {
    // Connect to bottom
    uf.union(element, grid[grid.length - 1]);
  }

  grid.filter(elem => element.neighbors.includes(elem.key))
      .filter(neighbor => neighbor.state !== 'closed')
      .forEach(neighbor => uf.union(element, neighbor));

  return grid;
}

export function checkPercolationAndFill(grid) {
  const uf = new UnionFind(grid);

  grid.filter(element => element.state === 'opened')
      .forEach(element => {
        if (uf.connected(element, grid[0])) {
          element.state = 'filled';
          if (element.southLimit) {
            grid[grid.length - 1].state = 'filled';
          }
        }
      });
  return grid;
}

export function gridPercolates(grid) {
  return grid[grid.length - 1].state === 'filled';
}
