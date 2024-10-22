# 2
print(len("P ython"))

# 3
print(type(int("10")))

print(4)
print("Python".upper())
print('=====5=====')
print(10%3)
print('=====7=====')
print('Python'.replace("Python","Java"))
print('=====8=====')
print('Python'.upper().index("O"))

print('=====9=====')
print('Python'.startswith("P"))
print('=====15=====')
n=[1,2,3,4,5]
for i in n:
    if i==3:
        continue
    print(i, end=' ')
print('=====16=====')
for i in range(5,0,-2):
    print(i, end=' ')
print('=====17=====')
words = ['apple', 'banana', 'cherry']
for word in words:
    if len(word)>5:
        print(word, end=' ')

print('=====18=====')
d = {'a':1, 'b':2}
for key in d:
    print(key*2,end=' ')
print('=====19=====')
def r(n):
    if n>0:
        r(n-1)
        print(n, end=' ')
r(5)

print('=====20=====')
def rp(b,e):
    if e == 0: 
        return 1
    else:
        return b*rp(b,e-1)

print(rp(2,3))

print('=====21=====')

def rp(n):
    return str(abs(n))+rp(n-1) if n> -4 else ''
print(rp(3))

print('=====22=====')

def rm(n,m):
    if n==1:
        return m
    else:
        return n*rm(n-1,m)

print(rm(3,2))

print('=====23=====')

def recursive_is_prime(n):
    if n < 1:
        return False
    elif n <=3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False
    else:
        for i in range(5, int(n**0.5) + 1, 6):
            if n % i == 0 or n % (i + 2) == 0:
                return False
        return True

print(recursive_is_prime(29))
print('=====24=====')
def recursive_binary_search(arr, x, start, end):
    if start <=end:
        mid = (start + end) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return recursive_binary_search(arr, x, start, mid - 1)
        else:
            return recursive_binary_search(arr, x, mid + 1, end)
    return -1

print(recursive_binary_search([1, 2, 3, 4, 5], 3, 0, 4))
print('=====25=====')

def recursive_power(base, exp):
    if exp == 0:
        return 1
    else:
        return base * recursive_power(base, exp + 1)
    
print(recursive_power(10, -2))

print('=====26=====')
李小雨 = "Python"