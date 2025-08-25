# Open a file in read mode, and print its content
file = open('data/shopping-list.txt', 'r')

content = file.read()

print(content)

file.close()


# Open a file, and read line-by-line
file1 = open('data/shopping-list.txt', 'r')

content1 = file1.readlines()

print(content1)

file1.close()

# Open a file, and read one line at a time
file2 = open('./data/shopping-list.txt', 'r')

content2 = file2.readline()
content3 = file2.readline()
content4 = file2.readline()

print(content2, content3, content4)


# Open a file in Write mode to write to it
file10 = open('./data/shopping-list.txt', 'w')

file10.write('Milk\n')
file10.write('Sugar\n')
file10.write('Bread\n')

file10.close()


# Open a file in append mode and append to it
file11 = open('./data/new-shopping-list.txt', 'a')

file11.write('Milk\n')
file11.write('Sugar\n')
file11.write('Bread\n')

file11.close()


# Using the "With" statement

with open("./data/shopping.txt", "w") as file20:
    file20.write("Cucumber\n")
    file20.write("Melon\n")
    file20.write("Apples\n")
    file20.write("Mangoes\n")



with open('./data/shopping.txt', 'r') as file21:
    content21 = file21.read()

    print(content21)