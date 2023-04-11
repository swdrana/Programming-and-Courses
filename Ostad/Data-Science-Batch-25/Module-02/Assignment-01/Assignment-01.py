givenList = [1, 5, 6, 5, 1, 2, 3]
uniqueList = []
duplicateList = []
for item in givenList:
    if item not in uniqueList:
        uniqueList.append(item)
    else:
        duplicateList.append(item)
print(duplicateList)