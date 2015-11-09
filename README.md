# Leetcode Helper


## API

### List

```js
var List = require('leetcode').List;
```
### List.node

`ListNode` constructor, used to create a node in list.

#### ListNode.prototype.toArray

Convert a List to an array. Usually used for debug.

```js
var List = require('leetcode').List;

// { val: 1, next: { val: 2, next: { val: 3, next: null } } }  
var l = List.create([1, 2, 3]);

// [1, 2, 3]
console.log(l.toArray());
```

#### List.create

Create a List with an array, return the head of the list which is a `ListNode` instance.

```js
var List = require('leetcode').List;

// { val: 1, next: { val: 2, next: { val: 3, next: null } } }  
var l = List.create([1, 2, 3]);
```

#### List.toArray

Same as `ListNode.prototype.toArray`.


### Tree

```js
var Tree = require('leetcode').Tree;
```
#### Tree.node

`TreeNode` constructor, used to create a node in tree.

#### Tree.create

```js
var tree = require('leetcode').Tree;
var eq = require('assert').equal;
var t1 = tree.create([1,null,2,3]);
var t2 = tree.create([1,null,2,3]);

// Notice: you should implement isSameTree youself
eq(isSameTree(t1, t2), true);
```

Create a Tree with an array, return the root of the tree which is a `TreeNode` instance.
Please refer the [Leetcode#faq](https://leetcode.com/faq/#binary-tree) for the rule.


## LICENSE

ISC
