# 1. Given a list numbers = [1,2,3,4,5,6,7,8,9,10], use list comprehension to generate a new list that only contains the even numbers form the original list. 

numbers = [1,2,3,4,5,6,7,8,9,10]
even_numbers = [num for num in numbers if num%2==0]
print(even_numbers)

# 2. There is a list containing stirngs words = ['apple', 'banana', 'cherry', 'date']. Use list comprehension to generate a new list where each element is the length of the corresponding string in the original list.

words = ['apple', 'banana', 'cherry', 'date']
length_words = [len(word) for word in words]
print(length_words)

#3. Given two list list1=[1,2,3] and list2=[4,5,6], use list comprehension to generate a new list where each elements is the sum of the elements in the corresponding positions of the two lists.

list1 = [1,2,3]
list2 = [4,5,6]
sum_list = [list1[i]+list2[i] for i in range(len(list1))]

# another way:
# sum_list = [num1+num2 for (num1,num2) in zip(list1,list2)]
print(sum_list)





# 4. An infinity loop is a special kind of loop that once started cannot end normally. Please try to construct and infinity loop using 'for' and 'list'.
nl = [1, 2, 3, 4, 4, 4]
for i in nl:
    print(nl)
    # nl.append(6)


# 5. Sort a list whose elements are all string, the requirement is to sort the last letter of each string in alphabetical order.

words = ['apple', 'banana', 'cherry', 'date']
sorted_words = sorted(words, key=lambda word: word[-1])
print(sorted_words)






# 6. how to know which index is removed
nl = [1, 2, 3, 4, 4, 4]
value_to_remove = 4

# Find and store the indices of the value, enumerate(nl) gives us both the index and the value as we iterate over the list.
indices = [index for index, value in enumerate(nl) if value == value_to_remove]

# Remove the first occurrence of the value
if indices:
    nl.remove(value_to_remove)

# Print the modified list and the indices of the removed value
print("Modified list:", nl)
print("Index of removed value:", indices[0])  # Print the index of the first occurrence
