class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value && this.left) {
      this.left.insert(value);
    } else if (value < this.value) {
      this.left = new BinarySearchTree(value);
    }

    if (value > this.value && this.right) {
      this.right.insert(value);
    } else if (value > this.value) {
      this.right = new BinarySearchTree(value);
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (value > this.value && this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
}

module.exports = BinarySearchTree

