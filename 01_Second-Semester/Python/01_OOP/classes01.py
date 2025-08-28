class User:
    def __init__(self, first_name, last_name, user_name, password):
        self.first_name = first_name
        self.last_name = last_name
        self.user_name = user_name or "user_one"
        self.password = password

        self.user_activated = False

    # To activate user
    def is_activated(self):
        return self.user_activated
    
    # To get username
    def get_user_name(self):
        return self.user_name
    
    # To set username
    def set_user_name(self, user_name):
        self.user_name = user_name


user1 = User("Ibukunola", "Mabs", "mareola", "yyy")

print(user1.is_activated()) # activate user
print(user1.get_user_name()) # mareola

user1.set_user_name("Ore") # set username to Ore
print(user1.get_user_name()) # Ore
