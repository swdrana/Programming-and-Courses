def ascendingList(getList):
    getList.sort(key=None, reverse=False)
    return getList

List = [1, 5, 2, 9, 3, 22, 13]
print(ascendingList(List))