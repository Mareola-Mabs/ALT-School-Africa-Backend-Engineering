# Creating a class called Person
class Person:
    
    # Defining thee Constructor Function
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    
    def greet(self):
        return (f"Hello {self.name}")
    
    def newGreet(self): # no need for binding
        value = self.greet()

        return value


        

# Creating a new instance of the Person class
person1 = Person("Mareola", 26, "male")


print(person1.gender) # male
print(person1.greet()) # Hello Mareola

person2 = Person("Mabs", 20, "female")
print(person2.gender) # female

print(person2.newGreet()) # Hello Mabs
        