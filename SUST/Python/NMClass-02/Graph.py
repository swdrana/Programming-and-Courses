import turtle as t
# for a in range(5):
#     t.forward(100)
#     t.right(144)


# Polygone 
# for ang in range(1,6):
#     t.fd(100)
#     t.seth(-ang*72)

# Star 
# for ang in range(1,6):
#     t.fd(100)
#     t.seth(-ang*144)


# 7 Segment Display 
# t.forward(100)
# t.right(90)
# t.forward(100)
# t.right(90)
# t.forward(100)
# t.right(90)
# t.forward(200)
# t.right(90)
# t.forward(100)
# t.right(90)
# t.forward(100)
# t.right(90)

def lineTurn(draw):
    t.pendown() if draw else t.penup()
    t.fd(100)
    t.right(90)

def drawDigit(digit):
    lineTurn(True if digit in [2,3,4,5,6,8,9] else False)
    lineTurn(True if digit in [0,1,3,4,5,6,7,8,9] else False)
    lineTurn(True if digit in [0,2,3,5,6,8,9] else False)
    lineTurn(True if digit in [0,2,6,8] else False)
    t.left(90)
    lineTurn(True if digit in [0,4,5,6,8,9] else False)
    lineTurn(True if digit in [0,2,3,5,6,7,8,9] else False)
    lineTurn(True if digit in [0,1,2,3,4,7,8,9] else False)
    t.right(180)
    t.penup()
    t.fd(20)
    t.pendown()

# Setup the turtle graphics window
t.speed(1)  # Set the speed of drawing
t.penup()
t.goto(-400, 0)  # Start position
t.pendown()

drawDigit(2)
drawDigit(0)
drawDigit(2)
drawDigit(4)
drawDigit(1)
drawDigit(0)
drawDigit(2)
drawDigit(8)
input()