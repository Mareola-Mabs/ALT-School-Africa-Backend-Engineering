for i in range(2):
    for j in range(3):
        print(i, j)

# Answer
# 0 0
# 0 1
# 0 2
# 1 0
# 1 1
# 1 2

for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            print(i * j)

# Answer
# 1 * 1 => 1
# 2 * 2 => 4
# 3 * 3 => 9


for i in range(3):
    for j in range(i , 3):
        print("*", end="")
    print()

# Answer
# ***
# **
# *


for i in range(1, 6):
    if i % 2 == 0:
        for j in range(i):
            print(i, end="")
        print()


# Answer
# 22
# 4444


for i in range(1, 4):
    for j in range(1, 4):
        if i+j > 4:
            print(f"{i}+{j} > 4")

# Answer
# 2+3 > 4
# 3+2 > 4
# 3+3 > 4

count = 0
for i in range(5):
    for j in range(5):
        if (i + j) % 2 == 0:
            count +=1

# print(count)
# Answer
# 13

# Using the rest operator in python
def add(*others):
    print(list(others))

add("Mareola", "Segun", "Elon")

