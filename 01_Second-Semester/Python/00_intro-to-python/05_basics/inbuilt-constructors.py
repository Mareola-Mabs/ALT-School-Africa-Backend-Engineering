# Inbuilt Constructors can be used to convert data types to another

# Int() constructor ## Converts to Integer
number = '50'
print(type(number))

newNumber = int(number)
print(type(newNumber))

# Str() constructor ## Converts to String
number1 = 50
print(type(number1))

newNumber1 = str(number1)
print(type(newNumber1))

# Float() constructor ## Converts to Float
temperature = 30
print(type(temperature))


newTemperature = float(temperature)
print(type(newTemperature), newTemperature)


flat = 31.7
newFlat = int(flat)
print(newFlat)


isFalse = False

newIsFalse = int(isFalse)
print(type(newIsFalse), newIsFalse)


# List() ## Converts diff object types to a List []
myList = list()

print(myList) # Empty Array []


# With a String
letters = list("Hello")

print(letters) #['H', 'e', 'l', 'l', 'o']

# With a List
numbers = list([1, 2, 3])

print(numbers) #[1, 2, 3]

# With Range
newNumbers = list(range(3, 10))

print(newNumbers) #[3, 4, 5, 6, 7, 8, 9]


# Converting List Values to Int with a Loop
newList = list("12345")


newList1 = []
j = -1
 
for item in newList:
    j += 1
    newList[j] = int(item)

    newList1.append(int(item))

print(newList)
print(newList1)

    
    




