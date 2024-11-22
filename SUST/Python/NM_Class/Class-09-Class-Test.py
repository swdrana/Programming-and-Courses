# 2.4
'''
def passit(x, y):  # Corrected the parameter
    z = x * y
    result = getresult(z)
    return result

def getresult(number):
    z = number + 2
    return z

num1 = 3
num2 = 4
answer = passit(num1, num2)
print(answer)
'''
# ''' 2.5 the output of the result of the following program is '''
# import math
# def factors(x):
#     y = int (math.sqrt(x))
#     for i in range (2,y+1):
#         if (x%i==0):
#             print(i, end=' ')
#             factors(x//i)
#             break
#         else:
#             print(x,end=' ')
#     return
# factors(18)
# '''
# a. 3 2 3
# b. 2 9 3 answer
# c. 3 6 3
# d. 2 3 6
# '''


# # 2.6 the output result of the following python satatements is:
# i = map(lambda x: x**2,(1,2,3))
# for t in i :
#     print(t, end=" ")

# # a. 1 4 9 answer
#  b. 2 4 6
#  c. 1 2 3 
# d. 9









# 2.7  tead the following code and analyze its execution result
# def demo(a,b, c=3, d=100   ):
#     return sum((a,b,c,d))
# print(demo(1,2,3,4), end=',')
# print(demo(1,2,d=3))

# ans: 10,9



# # 2.8 if the following code block is executed, what will be list b be?
# a = ['Man', 'what can I say', 'Mamba','out','!']
# b = a[0::4] # [start:end:step]
# b.append('elbow strike')
# print(b)
# # b. ['Man', '!', 'elbow strike'] correct answer




# # 2.9 for the fuple x = (4,5,6), what will be the result when the following code ececuted?
# x[1]=10
# print (x)
#  ans: Error TypeError: 'tuple' object does not support item assignment


# 2.11 which of the following statemts will result in {'1','2','3'}?
#answer: set('123')


# # 2.14
# a = [x**2 for x in range(11) if x%2==0]
# print(a[-1:-6:-2]) # [100, 36, 4]


# # 2.15 for the correct expression a[2], a cannot be of which of the following types?
# a. List
# b. Tuple
# c. Set
# D. String

# The correct answer is c. Set.

# Explanation:
# In Python, the expression a[2] refers to accessing the third element (since indexing starts at 0) of the iterable a. Let's examine how this applies to each type:

# List: Lists are ordered collections, and you can access elements using indices, like a[2]. So, this is valid for lists.

# Tuple: Tuples are also ordered and can be indexed in the same way as lists, so a[2] is valid for tuples.

# Set: Sets are unordered collections and do not support indexing. You cannot access elements of a set by index, so a[2] is not valid for sets.

# String: Strings are sequences of characters, and you can access individual characters using indices, so a[2] is valid for strings.





















# # 3.1 This question requires implementing a function that can decompose any positive integer into the form of a product of its prime factors.
# '''your code here'''
# def factors(n):
#     # মৌলিক গুণনীয়ক বের করার জন্য ২ দিয়ে শুরু করি
#     i = 2
#     while i * i <= n:  # n এর বর্গমূল পর্যন্ত পরীক্ষা করা
#         while n % i == 0:  # যদি i গুণনীয়ক হয়
#             facs.append(i)  # facs লিস্টে i যোগ করি
#             n //= i  # n কে i দিয়ে ভাগ করি
#         i += 1 if i == 2 else 2  # ২ এর পর শুধু বিজোড় সংখ্যাগুলিই পরীক্ষা করি
    
#     # যদি n এখনো ১ এর বড় থাকে, তবে সেটি মৌলিক সংখ্যা হবে
#     if n > 1:
#         facs.append(n)

# # ইনপুট নেওয়া
# facs = []
# n = int(input())  # ব্যবহারকারী ইনপুট নিবে
# factors(n)

# # facs লিস্টের সব মৌলিক গুণনীয়ক গুলি '*' দিয়ে যোগ করে একটি স্ট্রিং তৈরি
# result = '*'.join(map(str, facs))

# # যাচাই করা যে গুণফল সঠিক কিনা
# if n == eval(result):
#     print(n, '=', result)

# # print(facs)
# # input sample: 1001
# # output sample: 1001 = 7*11*13






# 4.1 
# text = input("Enter a string: ")
# # strList = text.split(' ')
# for w in text.split(' '):
#     print(w[0].capitalize(), end='')






# 4.2
n = int(input("Enter a number: "))
mydict = {'red': 'Rose', 'orange':'Poppies', 'yellow':'Sunflower', 'green':'Grass', 'blue':'Bluebells', 'violet':'Violets'}
inpList = []
while(n):
    inpList.append(input("Enter a color: "))
    n-=1
for i in inpList:
    if i in mydict.keys():
        print( mydict[i], 'are', i)
    else:
        print("I don't know about the color", i)