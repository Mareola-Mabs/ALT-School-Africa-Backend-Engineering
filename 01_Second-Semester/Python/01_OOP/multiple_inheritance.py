# First class
class User:
    def __init__(self, name, role):
        self.name = name
        self.role = role

    def get_name(self):
        print("Your name is ",self.name)

    def get_role(self):
        print("Your name is ",self.role)

    

# Second class
class UserSettings:
    def __init__(self, bg_color, font_size):
        self.bg_color = bg_color
        self.font_size = font_size

    def set_Bg_color(self, bg_color):
        self.bg_color = bg_color

    def set_font_size(self, font_size):
        self.font_size = font_size



# Creating the inheriting class
class AdminUser(User, UserSettings):
    # Creating the constructor
    def __init__(self, name, role, bg_color, font_size, age):

        # calling inherited constructors
        User.__init__(self, name, role)
        UserSettings.__init__(self, bg_color, font_size)

        self.age = age


    # Defining new Methods
    def get_age(self):
        return self.age

    def get_font_size(self):
        return self.font_size

    # Overriding Methods
    def set_Bg_color(self):
        return "This method has been overriding"
    

# Creating an instance of the object
new_admin_user = AdminUser("Mareola", "Admin", "blue", "2px", 26)

print(new_admin_user.age) # 26
print(new_admin_user.get_age()) # 26
print(new_admin_user.set_font_size("10px")) # 10px
print(new_admin_user.get_font_size()) # 10px
print(new_admin_user.set_Bg_color())