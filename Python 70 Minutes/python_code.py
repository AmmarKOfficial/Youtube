# Python Variables, Constants and Literals
site_name = 'bluetu devs'
print(site_name)
# assigning a new value to site_name
site_name = 'ammar khan'
print(site_name)
print("***************")

a, b, c = 5, 3.2, 'Hello'
print(a)  # prints 5
print(b)  # prints 3.2
print(c)  # prints Hello 
print("***************")

site1 = site2  = 'BLUETU.com'
print(site1)  # prints programiz.com
print(site2)  # prints programiz.com
print("***************")

# list literal
fruits = ["apple", "mango", "orange"] 
print(fruits)
# tuple literal
numbers = (1, 2, 3) 
print(numbers)
# dictionary literal
alphabets = {'a':'apple', 'b':'ball', 'c':'cat'} 
print(alphabets)
# Set literal
vowels = {'a', 'e', 'i' , 'o', 'u'} 
print(vowels)

print("***************")
num1 = 5
print(num1, 'is of type', type(num1))
num2 = 2.0
print(num2, 'is of type', type(num2))
num3 = 1+2j
print(num3, 'is of type', type(num3))
num4 = "BLUETU"
print(num4, 'is of type', type(num4))

print("***************")
languages = ["C++", "Java", "Python"]
# access element at index 0
print(languages[0])   # C++
# access element at index 2
print(languages[2])   # Python

# Python Type Conversion
print("***************")
integer_number = 123
float_number = 1.23
new_number = integer_number + float_number
# display new value and resulting data type
print("Value:",new_number)
print("Data Type:",type(new_number))

# We get TypeError, if we try to add str and int. For example, '12' + 23. Python is not able to use Implicit Conversion in such conditions.
print("***************")
num_string = '12'
num_integer = 23
print("Data type of num_string before Type Casting:",type(num_string))
# explicit type conversion
num_string = int(num_string)
print("Data type of num_string after Type Casting:",type(num_string))
num_sum = num_integer + num_string
print("Sum:",num_sum)
print("Data type of num_sum:",type(num_sum))
print("***************")

# Python Basic Input and Output
print("***************")
print('Python is powerful')
# print with end whitespace
print('Good Morning!', end= ' ')
print('It is rainy today')
print('New Year', 2023, 'See you soon!', sep= '. ')
# using input() to take user input
# num = input('Enter a number: ')
# print('You Entered:', num)
# print('Data type of num:', type(num))
# num = int(input('Enter a number: '))

# Operators in Python
print("***************")
a = 7
b = 2
# addition
print ('Sum: ', a + b)  
# subtraction
print ('Subtraction: ', a - b)   
# multiplication
print ('Multiplication: ', a * b)  
# division
print ('Division: ', a / b) 
# floor division
print ('Floor Division: ', a // b)
# modulo
print ('Modulo: ', a % b)  
# a to the power b
print ('Power: ', a ** b)

# equal to operator
print('a == b =', a == b)
# not equal to operator
print('a != b =', a != b)
# greater than operator
print('a > b =', a > b)
# less than operator
print('a < b =', a < b)
# greater than or equal to operator
print('a >= b =', a >= b)
# less than or equal to operator
print('a <= b =', a <= b)

# logical AND
print(True and True)     # True
print(True and False)    # False
# logical OR
print(True or False)     # True
# logical NOT
print(not True)          # False

# Global Keyword in Python
print("***************")
# define global variable 
global_var = 10
def my_function():
    # define local variable
    local_var = 20

    # modify global variable value 
    global global_var
    global_var = 30

# print global variable value
print(global_var)
# call the function and modify the global variable
my_function()
# print the modified value of the global variable
print(global_var)


# If-Else
print("***************")
number = 10
if number > 0:
    print('Positive number')
else:
    print('Negative number')
print('This statement always executes')

number = 0

if number > 0:
    print('Positive number')
elif number <0:
    print('Negative number')
else:
    print('Zero')
print('This statement is always executed')

# Python for Loop
languages = ['C++', 'Python', 'Go']
# access elements of the list one by one
for i in languages:
    print(i)
    
# Python While Loop
print("***************")
number = 1
while number <= 3:
    print(number)
    number = number + 1
 
 
# Python break and continue
print("***************")  
for i in range(5):
    if i == 3:
        break
    print(i)
print("***************")    
for i in range(5):
    if i == 3:
        continue
    print(i)

# Python Functions
print("***************")  
def greet():
    print('Hello World!')
# call the function
greet()
print('Outside function')

print("***************")  
def greet(name):
    print("Hello", name)
#pass argument
greet("John")

print("***************") 
# function with two arguments
def add_numbers(num1, num2):
    sum = num1 + num2
    print("Sum: ", sum)
# function call with two values
add_numbers(5, 4)

print("***************") 
# function definition
def find_square(num):
    result = num * num
    return result

# function call
square = find_square(3)
print('Square:', square)

print("***************") 
def future_function():
    pass
# this will execute without any action or error
future_function()

print("***************") 
import math
# sqrt computes the square root
square_root = math.sqrt(4)
print("Square Root of 4 is",square_root)
# pow() comptes the power
power = pow(2, 3)
print("2 to the power 3 is",power)

# Python Function With Arbitrary Arguments
# program to find sum of multiple numbers 
def find_sum(*numbers):
    result = 0
    for num in numbers:
        result = result + num
    
    print("Sum = ", result)
# function call with 3 arguments
find_sum(1, 2, 3)
# function call with 2 arguments
find_sum(4, 9)
print("***************") 

# Python Lambda/Anonymous Function
# declare a lambda function
greet = lambda : print('Hello World')
# call lambda function
greet()
# Output: Hello World
print("***************") 

# Python Modules

# import standard math module 
import math
# use math.pi to get value of pi
print("The value of pi is", math.pi)
# import only pi from math module
print("***************") 

from math import pi
print(pi)
# Output: 3.141592653589793
print("***************")


# Python Data types
# Python Numeric
num1 = 5
print(num1, 'is of type', type(num1))

# Bin:0b, Octal:0o, Hex:0x
print(0b1101011)  # prints 107
print(0xFB + 0b10)  # prints 253
print(0o15)  # prints 13

# Create a Python List
print("***************")
 # a list of three elements
ages = [19, 26, 29]
print(ages)
# Output: [19, 26, 29]
fruits = ['apple', 'banana', 'orange']
print('Original List:', fruits)
# using append method 
fruits.append('cherry')
print('Updated List:', fruits)
fruits[0] = 'pineapple'
print('Updated List:', fruits)

# Python Tuple
print("***************")
# A tuple is a collection of data similar to a Python list. The only difference is that we cannot modify a tuple once it has been created.
languages = ('Python', 'Swift', 'C++')
# access the first item
print(languages[0])   # Python

# Python Strings
print("***************")
# create string type variables

name = "Python"
print(name)
message = "I love Python."
print(message)

# multiline string
print("***************")
message = """
Never gonna give you up
Never gonna let you down
"""
print(message)

# Python Sets
# A set is a collection of unique data, meaning that elements within a set cannot be duplicated. 
# create a set of integer type
student_id = {112, 114, 116, 118, 115}
print('Student ID:', student_id)
# create a set of string type
vowel_letters = {'a', 'e', 'i', 'o'}
print('Vowel Letters:', vowel_letters)
# using add() method
vowel_letters.add('u')
print('Updated Vowel Letters:', vowel_letters)
# removeing
num = vowel_letters.discard('i')
print('Updated Vowel Letters:', vowel_letters)


# Python Dictionary 
print("***************")
# creating a dictionary
country_capitals = {
  "Germany": "Berlin", 
  "Canada": "Ottawa", 
  "England": "London"
}
# printing the dictionary
print(country_capitals)
# access the value of keys
print(country_capitals["Germany"])    # Output: Berlin
print(country_capitals["England"])    # Output: London

# add an item with "Italy" as key and "Rome" as its value
country_capitals["Italy"] = "Rome"
print(country_capitals)

# delete item having "Germany" key
del country_capitals["Germany"]
print(country_capitals)

# change the value of "Italy" key to "Rome"
country_capitals["Italy"] = "Torino"
print(country_capitals)


