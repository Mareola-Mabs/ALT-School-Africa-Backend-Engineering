# Defining Functions
def sayHello():
    print("Hello World!")


def add():
    print(2 + 3)



# Calling the Functions
sayHello()
add()


# Calling a Function Again
sayHello()


# Functions With Parameters
def greet(name):
    print("Welcome to the world of functions " + name + "!")
    print(f"Welcome to the world of functions {name}!")


greet("Mareola")

# Function with two parameters
def addNums(a, b):
    return (a + b)


print(addNums(50, 6))


# Functions parameters with default values
def subNums(a=5, b=20):
    return a - b


print (subNums())
print (subNums(20, 10))
print (subNums(5))


def fullName(firstName = "John", lastName = "Doe"):
    return f"{firstName} {lastName}"


 

print(fullName())

