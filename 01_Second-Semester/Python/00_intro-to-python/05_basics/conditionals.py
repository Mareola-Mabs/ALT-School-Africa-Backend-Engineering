# Conditionals
if (8 == 5):
    print("Eight is Greater Than Five")

elif (8 == 6):
    print("Eight is Greater Than Six")

else:
    print("None of the Above")


# Checking the Type of a Variable
if type(18) is int:
    print("It is an Int")

if isinstance(18, float): # It's not a Float
    print("It is Int")
    print("This is also a line")
print("This is a default output")


score = 92

if score > 90:
    print("Grade A")

elif score > 80:
    print("Grade B")

elif score > 70:
    print("Grade C")

else:
    print("Grade F")

print("Exam Over!")
