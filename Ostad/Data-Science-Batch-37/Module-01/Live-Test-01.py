score = float(input("Input your score:"))

if(score>100):
    print('Something Wrong!')
elif(score>=90):
    print("A")
elif(score>=80):
    print("B")
elif(score>=70):
    print("C")
elif(score>=60):
    print("D")
elif(score>=50):
    print("E")
elif(score>=40):
    print("E-")
elif(score<40):
    print("F")
else:
    print('Something Wrong!')