class Account:
    def __init__(self, acc_num, acc_type, balance, acc_holder):
        self.acc_num = acc_num or 1234567890
        self.acc_type = acc_type or "savings"
        self.balance = balance or 0
        self.acc_holder = acc_holder

    def deposit(self, amount):
        self.balance += amount
    
    def withdraw(self, amount):
        self.balance -= amount

    def get_balance(self):
        return self.balance
    
    def get_acc_num(self):
        return self.acc_num
    
    def get_acc_type(self):
        return self.acc_type + " account"
    
    def get_acc_details(self):
        return f"acc no: {self.acc_num}, acc type: {self.acc_type}, balance: {self.balance}, account holder: {self.acc_holder}"
    

class User(Account):

    def set_acc_type(self, acc_type):
        self.acc_type = acc_type

    

# Creating an new instance
newUser = User("", "savings", "", "Mareola")

print(newUser.balance) # 0
print(newUser.acc_holder) # Mareola

newUser.set_acc_type("current")

print(newUser.get_acc_type()) # current account

print(newUser.get_acc_details())

newUser.deposit(20000) # Deposits 20,000

print(newUser.get_acc_details()) # 20,000

newUser.withdraw(200.50) # Withdraw 200.50

print(newUser.get_acc_details()) # 19799.5



