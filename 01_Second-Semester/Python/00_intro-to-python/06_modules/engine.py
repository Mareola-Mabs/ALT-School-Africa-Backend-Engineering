# A simple calc engine

def add(num1, num2):
    return num1 + num2

def sub(num1, num2):
    return num1 - num2

def div(num1, num2):
    if num1 == 0 or num2 == 0:
        return "cannot Divide with Zero"
    return num1 / num2

def mul(num1, num2):
    return num1 * num2


item = 50