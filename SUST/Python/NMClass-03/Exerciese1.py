import turtle as t
import random as rnd
import math

r = 300
points = []
inside = 0
outside = 0

def drawQuarterCircle(radius):
    """Draws a quarter circle based on the given radius."""
    t.penup()
    t.goto(0, radius)  # Starting position at the top of the quarter circle
    t.setheading(0)  # Face the turtle to the right
    t.pendown()
    t.speed(0)  # Set to fastest speed

    # Draw the quarter circle by moving forward in small steps and turning a small angle each time
    steps = 90  # Number of steps to divide the arc
    step_length = (math.pi * radius / 2) / steps  # Length of each step to approximate the arc

    for _ in range(steps):
        t.forward(step_length)
        t.right(90 / steps)  # Total of 90 degrees for a quarter circle

def monteCarlo(rndPoint):
    """Performs a Monte Carlo simulation to estimate points inside the quarter circle."""
    global inside, outside  # Declare inside and outside as global to modify them

    # Draw a square with side length r
    t.penup()
    t.goto(0, 0)
    t.pendown()
    for _ in range(4):
        t.forward(r)
        t.left(90)
    
    # Draw the quarter circle
    drawQuarterCircle(r)

    # Generate random points and classify them as inside or outside the quarter circle
    while rndPoint:
        x, y = rnd.randint(0, r), rnd.randint(0, r)
        points.append([x, y])
        rndPoint -= 1
    
    for x, y in points:
        print(f"Point: ({x}, {y})")
        t.penup()
        t.goto(x, y)
        t.pendown()
        t.dot(5, "red" if x**2 + y**2 <= r**2 else "blue")  # Color point based on inside/outside
        
        # Check if the point is inside the quarter circle
        if x**2 + y**2 <= r**2:
            inside += 1
        else:
            outside += 1

# Run the Monte Carlo simulation
monteCarlo(10)

# Display the results
print('inside:', inside)
print('outside:', outside)

t.done()
