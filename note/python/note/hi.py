print(100+200+300)

print(2**10)

print('hi')
print('hi', 'world')

print('''line1
line2
line3''')

# name = input('please enter your name: ')
# print('hi!',name)
print('===================')
list = [1, 2, 3, 4, 5, 6]
print(len(list))
print(list[0])
print(list[-1])
list.append(7)
print(list)
list.insert(7, 8)
print(list)
list.pop()
print(list)
list.pop(6)
print(list)

tuple = (1, 2, 3, 4, 5, 6)
print(tuple)
print(len(tuple))
print(tuple[0])

L = [
    ['Apple', 'Google', 'Microsoft'],
    ['Java', 'Python', 'Ruby', 'PHP'],
    ['Adam', 'Bart', 'Lisa']
]
print(L[0][0])
print(L[1])

# number = input('please enter number: ')
# number = int(number)
# if number < 6:
#     print('kid')
# elif number < 18:
#     print('teenager')
# else:
#     print('adult')

height = 1.75
weight = 80.5
# height = height * 100
bmi = weight / (height * height)
print(bmi)
print(52/(1.55*1.55))
if bmi < 18.5:
    print('过轻')
elif bmi < 25:
    print('正常')
elif bmi < 28:
    print('过重')
elif bmi < 32:
    print('肥胖')
else:
    print('严重肥胖')
print('===================')

total = 0
for x in range(101):
    total = x + total
print(total)

L = ['Bart', 'Lisa', 'Adam']
for x in L:
    print('Hello, %s!' % (x))
    
print('===================')

n = 1
while n < 100:
    if n > 10:
        break
    if n == 5:
        continue
    print(n)
    n = n + 1
print('END')