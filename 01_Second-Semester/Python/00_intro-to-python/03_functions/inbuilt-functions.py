# In-Built Functions 
# Visit https://docs.python.org/3/library/functions.html for more details

# ABS Returns the Absolute Values of a Number
print (abs(-5)) # 5


# ALL Returns True if all elements in an iterable are true
someFalse = [True, False, True]

allTrue = [True, True, True, True]

allFalse = [False, False, False]

print(all(someFalse)) # False
print(all(allTrue)) # True
print(all(allFalse)) # False


# ANY Returns True if any element in an iterable is true
print(any(allTrue))
print(any(allTrue))

print(any([0, 0, 1])) #True


#RANGE Returns a sequence of numbers. It can take one, two or three arguments
print(range(5)) # => range(0, 5)
print(range(1, 5)) # => range(1, 5)

# Range used for Looping
for i in range(2, 10):
    print(i)