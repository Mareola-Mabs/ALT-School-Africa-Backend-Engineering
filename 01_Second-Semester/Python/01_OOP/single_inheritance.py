# Parent class
class Human:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    

    def get_age(self):
        return self.age
    


# Creating a class that inherits from the "Human" class
class Student(Human):

    # Adding the constructor
    def __init__(self, first_name, last_name, age, grade):

        # Calling the inherited constructor
        super().__init__(first_name, last_name, age)

        # Defining the new parameters
        self.age = age
        self.grade = grade

    # Defining new methods
    def get_grade(self):
        return "cgpa " + self.grade

    # Overriding methods
    def get_full_name(self):
        return "Hey, this method has been Overridden!"


# Creating a new Instance
student1 = Student("Ibukunola", "Mabs", 26, "4.04")

print(student1.first_name) # Ibukunola
print(student1.get_grade()) # cgpa 4.04
print(student1.get_full_name()) # Hey, this method has been Overridden!


