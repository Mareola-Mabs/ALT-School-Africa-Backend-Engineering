# Creating Different Sets
names = {"Ade", "Femi", "Junior"} # Set of Strings

numbers = {1, 2, 3, 4, 5} # Set of Numbers

mixed = {"Bella", 1, "Charlie", 2} # Set of Strings and Integers

empty = set() # An Empty Set

duplicate = {1, 2, 2, 2, "Mareola", "Mareola", "Segun"} # {1, 2, 'Segun', 'Mareola'}

print(duplicate)


print(names)


# Modifying elements of a set
names.add("Buddy")

print(names)

names.remove('Ade') #

print(names)


# Adding multiple items to a set using set.update()
mySet = {1, 2, 3}

mySet.update([1, 4, 5, 6])

print(mySet)

# Adding multiple items to a set using |=
mySet |= {7, 8, 9}

print(mySet)


# Removing multiple items in a set using set.difference_update()
myNewSet = {1, 2, 3, 4}
myNewSet.difference_update([1, 3])

print((myNewSet))

# Removing multiple items in a set using a loop, and .discard()
oldSet = {1, 2, 3, 4, 5}
for i in [1, 2, 3]:
    oldSet.discard(i)

print(oldSet)




# Iterating over a set
for name in names:
    print(name)

 

# Set Operations
## Union
setOne = {"Bella", "Hadid", "Mareola", "Calvin Harris", "Henry Ford"}

setTwo = {1, 2, 3, 4, "Hadid"}

print(setOne.union(setTwo)) # {1, 2, 'Henry Ford', 3, 'Bella', 'Hadid', 4, 'Mareola', 'Calvin Harris'}
print(setOne | setTwo)

## Intersection
print(setOne.intersection(setTwo)) # {'Hadid'}
print(setOne & setTwo)

## Difference
print(setOne.difference(setTwo)) # {'Calvin Harris', 'Henry Ford', 'Bella', 'Mareola'}
print(setOne - setTwo)



