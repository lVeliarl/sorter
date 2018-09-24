class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = function (a, b) {
      return a - b;
    }
  }

  add(element) {
    return this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    // create a new array to sort indexed numbers
    let sorted = [];
    // declare function to sort numbers
    function sortNumber (a, b) {
      return a - b;
    }
    // add the specified numbers to an array
    for (let i = 0; i < indices.length; i++) {
      sorted[i] = this.arr[indices[i]];
    }
    // and sort them
    sorted.sort(this.compareFunction);
    indices.sort(sortNumber);
    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = sorted[i];
    }
    return sorted;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
