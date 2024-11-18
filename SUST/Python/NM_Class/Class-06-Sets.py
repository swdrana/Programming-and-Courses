# Sets: {}
# Set not allow duplicates elements
# Don't support indexing
# Set is unordered
# ডিকশনারি (dictionary): mutable (যেহেতু আপনি এর মধ্যে পরিবর্তন করতে পারেন)
# চাবি (keys): immutable (যেহেতু চাবিগুলি পরিবর্তন করা যাবে না)

# if duplicate elements then it will be removed
s = {1,2,3,4,5,1,2,3,4,5,6}
print(s) # {1, 2, 3, 4, 5, 6}

# Access elements using iterator 
for i in s:
    print(i) # 1 2 3 4 5 6
print(1 in s) # True

# Adding items to a set
s.add(7)
print(s) # {1, 2, 3, 4, 5, 6, 7}

# Adding multiple items to a set
s.update([8,9,10])
print(s) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# Removing items from a set
s.remove(7) # it will only work when element is present in set, and it will throw error when element is not present
print(s) # {1, 2, 3, 4, 5, 6, 8, 9, 10}

# Removing items from a set using discard
s.discard(6) # it will not throw error when element is not present
print(s) # {1, 2, 3, 4, 5, 8, 9, 10}


# Removing items from a set using pop
# no need to provide and index as a parameter, and it will remove the first element and return the removed element
print(s.pop()) # 1


s.update('hello')
print(s) # {2, 3, 4, 5, 8, 9, 10, 'h', 'e', 'l', 'o'}
s.update(['hello', 'world']) # List or any iterable. Ex: [1,2,3], ('a','b','c'), {'a':1, 'b':2, 'c':3}, dictionary
print(s) # {2, 3, 4, 5, 'h', 8, 9, 10, 'e', 'l', 'hello', 'world', 'o'}


# Clearing a set
# s.clear()
print(s) # set()


# ডিকশনারি (dictionary) হল mutable।
# এটি mutable কারণ আপনি একটি ডিকশনারির মধ্যে নতুন key-value জোড়া যোগ করতে পারেন, বিদ্যমান মান পরিবর্তন করতে পারেন, অথবা কোনো key-value জোড়া মুছে ফেলতে পারেন। ডিকশনারি নিজে পরিবর্তনযোগ্য, যদিও এর চাবিগুলি (keys) immutable হতে হবে (যেমন: string, number, tuple)।

my_dict = {'a': 1, 'b': 2}

# নতুন key-value যোগ করা
my_dict['c'] = 3  # mutable operation
print(my_dict)  # আউটপুট: {'a': 1, 'b': 2, 'c': 3}

# বিদ্যমান key-এর মান পরিবর্তন করা
my_dict['a'] = 10  # mutable operation
print(my_dict)  # আউটপুট: {'a': 10, 'b': 2, 'c': 3}

# key-value মুছে ফেলা
del my_dict['b']  # mutable operation
print(my_dict)  # আউটপুট: {'a': 10, 'c': 3}


# 6. Nesting Sets ===============================================================================
# it is possible to hold any immutable object in a set.
# frozenset হল Python-এ একটি immutable সেট (set) ডেটা টাইপ। অর্থাৎ, একবার এটি তৈরি হলে, আপনি এর মধ্যে কোনো পরিবর্তন করতে পারবেন না (যেমন: নতুন আইটেম যোগ করা, আইটেম মুছে ফেলা বা আইটেম পরিবর্তন করা)। এটি সেটের মতোই কাজ করে, কিন্তু একমাত্র পার্থক্য হলো এটি immutable।

# frozenset এর বৈশিষ্ট্য:
# Immutable: একবার তৈরি হলে আপনি frozenset-এর মধ্যে কোনো পরিবর্তন করতে পারবেন না। এটি একটি স্থির সেট।
# Unordered: এটি একটি অর্ডারহীন (unordered) ডেটা স্ট্রাকচার।
# Unique elements: এর মধ্যে শুধুমাত্র ইউনিক (unique) মান থাকতে পারে, কারণ এটি একটি সেট।

# frozenset তৈরি করা
my_frozenset = frozenset([1, 2, 3, 4])
print(my_frozenset)  # আউটপুট: frozenset({1, 2, 3, 4})

# frozenset-এ নতুন আইটেম যোগ করা যাবে না
# my_frozenset.add(5)  # এটি একটি এরর দিবে, কারণ frozenset immutable

# frozenset-এ কোনো আইটেম মুছে ফেলা যাবে না
# my_frozenset.remove(2)  # এটি একটি এরর দিবে

# frozenset-এর মধ্যে কিছু কাজ যেমন union, intersection করা যেতে পারে
another_frozenset = frozenset([3, 4, 5, 6])
result = my_frozenset.union(another_frozenset)  # frozenset এর union
print('Union: ',result)  # আউটপুট: frozenset({1, 2, 3, 4, 5, 6})
intersection = my_frozenset.intersection(another_frozenset)  # frozenset এর intersection
print('Intersection: ',another_frozenset.intersection(my_frozenset))  # আউটপুট: frozenset({3, 4})
print(' Diffrent: ',another_frozenset.difference(my_frozenset))
print(' Symmetric Difference: ',another_frozenset.symmetric_difference(my_frozenset))


print('*******************{ SET }*******************')
s1 = {1, 2, 3}
s2 = {3, 4, 5}

print('Union: ', s1|s2)
print('Intersection: ', s1&s2)
print('Diffrent: ', s1-s2)
print('Symmetric Difference: ', s1^s2) # Means = Union - Intersection


# পার্থক্য set এবং frozenset এর মধ্যে:
# set: mutable (পরিবর্তনযোগ্য), এতে নতুন আইটেম যোগ বা মুছতে পারেন।
# frozenset: immutable (অপরিবর্তনযোগ্য), একবার তৈরি হলে আপনি এতে কোনো পরিবর্তন করতে পারবেন না।
# যখন frozenset ব্যবহার করবেন:
# আপনি যদি কোনো সেটের অপরিবর্তনীয় সংস্করণ চান, যেখানে আপনি নিশ্চিত যে সেটে কোনো পরিবর্তন হবে না, তখন frozenset ব্যবহার করা হয়।








# Exercies 2: Enter a range of positive interger numbers, after rmoving the integers containing duplicate digits, print the integers form smallest to largest in the form of 5 numbers per line.
# Output the result. the data is arranged from small to large, with 5 numbers in each line. Each number printed a width of 8 characters. 