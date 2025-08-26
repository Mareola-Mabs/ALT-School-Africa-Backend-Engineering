# Open a csv file and read its data
with open('./data/users.csv', 'r') as file:
    content = file.read()
    print(content)


# Open a csv file and print its contents line by line
with open('./data/users.csv', 'r') as file1:
    content1 = file1.readlines()

    print(content1)


# Using the csv module to Open a csv file and print its contents
import csv

with open('./data/users.csv', 'r') as file2:
    reader = csv.reader(file2)

    print(list(reader)) # works too

    for row in reader: # works too
        print(row)

