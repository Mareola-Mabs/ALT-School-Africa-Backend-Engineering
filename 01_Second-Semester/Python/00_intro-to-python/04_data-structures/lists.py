# LISTS

names = ["Mareola", "Ibukunola", "Mabs"] # List of strings

numbers = [1, 2, 3, 4, 5] # List of integers

mixed = [1, 2, "Mareola", 4] #Mixed List

nested = [[1, 2, 3], ["Mareola", 1, "Mabs"], 4, 5, 6] #Nested List

empty = [] or list() # Empty List






print(type(mixed)) # Type is List

# Accessing List elements by index
print(names[0]) # The first Item
print(names[1]) # The second Item

# Accessing List elements by negative index
print(names[-1]) # The last item
print(names[-2]) # Second to the last item

# Accessing Nested Items
print(nested[0][1]) # 2


# Modifying List Items
numbers[0] = 20

print(numbers)


# Getting the Length of a List
print(len(names)) # 3



# Slicing a List
newNames = ["Ibukunola", "Priscilla", "Trevor", "Octavia", "Elon"]
print(newNames[0:2]) # ['Ibukunola', 'Priscilla']
print(newNames[:2]) # ['Ibukunola', 'Priscilla']
print(newNames[2:]) # ['Trevor', 'Octavia', 'Elon']
print(newNames[:]) # ['Ibukunola', 'Priscilla', 'Trevor', 'Octavia', 'Elon']


# Adding Items to a List
newNumbers = [1, 2, 4]
newNumbers.append(4)
newNumbers.append("James")
print(newNumbers)

# Adding by Index => Inserting an Item
newNumbers.insert(2, "James")
print(newNumbers) # [1, 2, 'James', 4, 4, 'James'] 


# Removing and element from a list
items = ["Plate", "Table", "Chair"]
print(items.pop()) # Removes the Last Item  ## "Chair"
print(items) # Returns the removed item  ## ['Plate', 'Table']
print(items.pop(0)) # Remove an Item based on Index and Return it "Plate"
print(items) # ['Table']


# Remove a Specific Item ## At the first instance
newItems = ["Table", "Chair", "Stand"]
newItems.remove("Table")
print(newItems)


