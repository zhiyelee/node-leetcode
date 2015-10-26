# Leetcode Helper


## API

### List

```js
var List = require('leetcode').List;
```

#### List.create

Create a List with an array, return the head of the list

#### List.toArray

Convert a List to an array. Usually used for debug.


### Tree

```js
var Tree = require('leetcode').Tree;
```
#### Tree.create

```js
var eq = require('assert').equal;
var t1 = tree.create([1,null,2,3])
var t2 = tree.create([1,null,2,3])

// Notice: you should implement isSameTree youself
eq(isSameTree(t1, t2), true);
```

Create a Tree with an array, return the root of the tree.
Please refer the [Leetcode#faq](https://leetcode.com/faq/#binary-tree) for the rule.


## LICENSE

ISC
