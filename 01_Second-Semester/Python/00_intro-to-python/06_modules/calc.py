# Importing the Engine
import engine
import engine as newEngine

from py_modules import extengine


print(engine.add(2, 10)) # Adds Them ## 10
print(newEngine.sub(2, 10)) # Subtracts Them ## -8
print(engine.div(4, 2)) # Divides Them ## 2

print(extengine.floorDiv(23, 5)) #Floor division ## 4


print(engine.item) # Prints the variable "item" which is 50