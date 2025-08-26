# # Using try/except clause
# try:
#     print(1/0)

#     print("Hello") # This will not run
# except ZeroDivisionError:
#     print("Cannot divide by zero", ZeroDivisionError)


# # Using try/except to handle multiple error cases
# try:
#     print(name)

# except NameError:
#     print("'Name' does not exist")

# except ZeroDivisionError:
#     print("Cannot divide by zero")

# except TypeError:
#     print("Invalid type")

# print("I GOT HERE") # to check if code passed


# try, except and else clause
try:
    print(1/1)

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    # code to run if no error is raised
    print("No error in division")


# try, except, and finally
try:
    print(1/0)

except ZeroDivisionError:
    print("Cannot divide by zero")

finally:
    # code to run if irrespective of an error
    print("I still got here")


# Raising an error with "raise" statement
def divide(num1, num2):
    if (num1 == 0 or num2 == 0):
        raise ZeroDivisionError("Number cannot be zero")
    
    return num1 / num2 
    

try:
    divide(4,0)

except ZeroDivisionError as e:
    print("The error is: ", e)


# Assertions
number = 0
assert number > 0, "Number cannot be zero or negative" # Throws assertion error
