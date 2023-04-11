givenList = [1, 5, 6, 5, 1, 2, 3]
newList = []
duplicateList = []
for item in givenList:
    if item not in newList:
        newList.append(item)
    else:
        duplicateList.append(item)


print(duplicateList)