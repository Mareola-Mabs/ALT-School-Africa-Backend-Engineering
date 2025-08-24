# Creating a Dictionary
empty = {}
newEmpty = dict()

userDetails = { # a dictionary with string keys
    'name': 'John',
    'age': 30,
    'isAdmin': True
}

colors = { # a dictionary with integer
    1: 'red',
    2: 'green',
    3: 'blue'
}

print(empty) # {}
print(newEmpty) # {}
print(userDetails) # {'name': 'John', 'age': 30, 'isAdmin': True}
print(colors) # {1: 'red', 2: 'green', 3: 'blue'}


# Accessing elements in a dictionary
print(userDetails['name'])
print(colors[1])


# Modifying elements in a dictionary
userInfo = {
    'username': 'James Bond',
    'isVerified': True
}

userInfo['isVerified'] = False

userInfo['isAdmin'] = False

print(userInfo['isVerified'])
print(userInfo)

# Deleting elements of an object
person = {
    "name": "Mareola",
    "age": 31
} 

person.pop("time", None)
print(person)


# Dictionary get() method
print(person.get("isAdmin", True))


# Looping over a dictionary
for items in person:
    print(items, person[items])