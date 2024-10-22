import random

print("Welcome to Number Guessing Game")

genRand= random.randint(1,10)
user_input = int(input("Please input a number between 1~10: "))
g = 4
while g:
    if(g==1):
        print('Sorry! the num was: ', genRand)
        break;
    if(genRand < user_input):
        user_input = int(input("Lower Number Need: "))
    elif(genRand>user_input):
        user_input = int(input("Higher Number Need: "))
    else:
        print("You'r Correct!")
        break;
    g-=1