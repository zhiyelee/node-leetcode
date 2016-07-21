var leetcode = require('./');
var deepEqual = require('assert').deepEqual;

var tree = leetcode.Tree;
var TreeNode = tree.node;

describe('Tree', function() {
  it('test without `null`', function() {
    var expected = new TreeNode(1);

    var left = new TreeNode(2);
    left.left = new TreeNode(4);
    expected.left = left;

    expected.right = new TreeNode(3);

    deepEqual(tree.create([1, 2, 3, 4]), expected)
  });

  it('test with `null`  in source array', function() {
    var expected = new TreeNode(1);

    expected.right = new TreeNode(2);
    expected.right.left = new TreeNode(3);

    deepEqual(tree.create([1, null, 2, 3]), expected)
  });
});
