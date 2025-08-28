class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance # private attribute/property

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount


    def get_balance(self):
        return self.__balance
        

acct = BankAccount("Alice", 1000)
print(acct.get_balance())
print(acct._BankAccount__balance) # works via name mangling
# print(acct.__balance) # throws error, cus its not accessible

acct.deposit(-500)
print(acct.get_balance()) # Balance remains unchanged
