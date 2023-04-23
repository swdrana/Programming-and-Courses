# Assignment-02

## Write a program to ascending sort the elements from the following list. (Create a function to solve it)

```python
List = [1, 5, 2, 9, 3, 22, 13] 
```

### Solutions:

```python
1 2 3 4 5 6
def ascendingList(getList): 
    getList.sort(key=None, reverse=False) 
    return getList
List = [1, 5, 2, 9, 3, 22, 13] 
print(ascendingList(List))
```

### Output:

```python
[1, 2, 3, 5, 9, 13, 22]
```