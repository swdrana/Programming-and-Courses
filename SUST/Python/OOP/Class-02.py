
class Person:
    num = 0  # Class attribute

    # Static method
    @staticmethod
    def welcome(name):
        print(f"Welcome {name}")

# Calling the method directly on the class
Person.welcome("Masud")

# Or via an instance
p1 = Person()
p1.welcome("Rana")
