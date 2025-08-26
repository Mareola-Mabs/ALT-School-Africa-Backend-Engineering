# Accept an input from the user
name = input("Enter your name: ")

print(type(name)) # <class 'str'>

input()
# Read two inputs from the user and print them
i = 0
while i == 0:
    newName = input("Enter a Name>> ")
    age = input("Enter an Age>> ")

    if (newName == "" or age == ""):
        print("Name and cannot be empty")
    else:
        print(f"Your name is {newName}, and your age is {age}")
        i += 1

