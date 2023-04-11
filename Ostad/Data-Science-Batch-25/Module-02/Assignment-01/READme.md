# Assignment-01


### Write a program to make another list of duplicate elements from the following list
```python
[1, 5, 6, 5, 1, 2, 3]
```

## Solution:

```python
givenList = [1, 5, 6, 5, 1, 2, 3]
uniqueList = []
duplicateList = []
for item in givenList:
    if item not in uniqueList:
        uniqueList.append(item)
    else:
        duplicateList.append(item)
print(duplicateList)
```