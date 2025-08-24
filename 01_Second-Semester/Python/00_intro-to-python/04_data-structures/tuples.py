# Tuples, they are immutable
names  = ("Mareola", "Charlie", "Elon", "Zuckerberg") # tuple of strings

numbers = (1, 2, 3, 4, 5, 6) # tuple of integers

mixed = ("Bella", "Ade", 1, 3, "Femi")

nested = ("Bella", "Ade", 1, ("Sule", "Ore"), 4)

empty = ()

newEmpty = tuple()

# Accessing Tuple Elements
print(names[0]) # Mareola
print(names[-1]) # Zuckerberg


# Slicing a tuple
print(names[0:3]) # ('Mareola', 'Charlie', 'Elon')
print(names[:2]) # ('Mareola', 'Charlie')
print(names[2:]) # ('Elon', 'Zuckerberg')
print(names[1:-1]) # ('Charlie', 'Elon')


# Getting the length of a Tuple
print(len(names)) # 4



# Iterating over a Tuple
for i in names:
    print(i)
