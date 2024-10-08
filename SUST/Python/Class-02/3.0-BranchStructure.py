x = int(input('input a num: '))

if(x%2==0):
    print('even')
elif(x%2!=0):
    print('odd')
else:
    print('Something worng')


# if Exception
age = 15
status = 'Teen' if (age>12 and age<20) else 'Not Teen'
print(status)