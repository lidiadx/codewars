# Array.diff

(Link to task on codewars)[https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript]

Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list `a`, which are present in list `b` keeping their order.

```javascript
arrayDiff([1,2],[1]) == [2]
```

If a value is present in `b`, all of its occurrences must be removed from the other:

```javascript
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

