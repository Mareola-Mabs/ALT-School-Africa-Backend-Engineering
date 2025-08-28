class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Initialization and Representation Method
    def __str__(self):
        return self.name
    
    # Operator Overloading Method
    def __add__(self, another):
        return self.name + another.name


u = User("Mareola", 26)

v = User("Anita", 23)

print(u + v)