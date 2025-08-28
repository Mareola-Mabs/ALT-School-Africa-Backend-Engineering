class Animal:
    species = "Mammals"

    def __init__(self, name, value):
        self.name = name
        self.value = value

    # Static method Decorator
    @staticmethod
    def feed():
        return "Animal is Feeding"
    
    @classmethod
    def walk(cls):
        return cls("Animal is Walking", "Hey")
    
    def get_name(self):
        return self.name
    

print(Animal.feed()) # Works fine without creating an instance of Animal class

# print(Animal.get_name()) # Throws an error, cus no instance of animal was created

print(Animal.species) # Mammals



p = Animal.walk()

print(p.name, p.value)

