function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
  var head = new ListNode();
  var current = head;
  arr.forEach(function (item) {
    current.next = new ListNode(item);
    current = current.next;
  });

  return head.next;
}

ListNode.prototype.toArray = function () {
  return toArray(this);
}

function toArray(node) {
  var ans = [];
  while(node) {
    ans.push(node.val)
    node = node.next;
  }

  return ans;
}

exports.List = {
  node: ListNode,
  create: createList
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// create Tree from array
// https://leetcode.com/faq/#binary-tree
function createTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  var len = arr.length;

  var res = new TreeNode(arr[0]);
  var nodes = arr.slice(1);
  var children = [res];
  var current = res;
  while(children.length) {
    current = children.shift();

    if (!current || current.val === null) {
      continue;
    }

    if (nodes.length) {
      current.left = new TreeNode(nodes.shift());
      children.push(current.left);
    }

    if (nodes.length) {
      current.right = new TreeNode(nodes.shift())
      children.push(current.right);
    }
  }

  return res;
}

exports.Tree = {
  node: TreeNode,
  create: createTree,
};
