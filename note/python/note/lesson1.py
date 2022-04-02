print(100+200+300)

print(2**10)

print('hi')
print('hi', 'world')

print('''line1
line2
line3''')

# name = input('please enter your name: ')
# print('hi!',name)
print('=================================================')
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
print('=================================================')

total = 0
for x in range(101):
    total = x + total
print(total)

L = ['Bart', 'Lisa', 'Adam']
for x in L:
    print('Hello, %s!' % (x))
    
print('=================================================')

# n = 1
# while n < 100:
#     if n > 10:
#         break
#     if n == 5:
#         continue
#     print(n)
#     n = n + 1
print('END')

s1 = set([1,2,3])
s2 = set([2,3,4])
print(s1&s2)
print(s1|s2)

def demo():
    print('+')

print(demo())

from ntpath import join
from unicodedata import name
from common import my_abs
print(my_abs(-9))
# print(my_abs('a'))
def noitem():
    pass

def info(name = '张三', age = 18, city = '杭州'):
    print('''
    name=%s
    age=%d
    name=%s
    ''' % (name, age, city))
info()

def calc(number):
    sum = 0
    for item in number:
        sum = sum +item
    return sum

print(calc([1,5,9]))
print(calc((1,5,9)))
print(calc(()))
# print(calc(*)) 报错

print('===================-递归函数')
"""
* 递归函数
"""

def fun_max(n):
    if n == 1:
        return 1
    return n * fun_max(n - 1)

print(fun_max(5)) # 5*4*3*2*1
"""
* 高级特性：
* 切片
* 迭代
"""

print('=================================================')

def calc(*number):
    sum = 0
    for item in number:
        sum = sum +item
    return sum
print(calc(*[1,5,9]))
print(calc(1,5,9))
print(calc())

# 去掉首尾字符串
def trim(s):
    if s == '' or (s[0] == ' ' and len(s) == 1):
        return ''
    if s[0] == ' ':
        s = s[(-(len(s)-1)):] # 去掉第一个
        return trim(s)
    elif s[-1] == ' ':
        s = s[:(len(s)-1)] # 去掉最后一个
        return trim(s)
    else:
        return s

if trim('hello  ') != 'hello':
    print('测试失败!')
elif trim('  hello') != 'hello':
    print('测试失败!')
elif trim('  hello  ') != 'hello':
    print('测试失败!')
elif trim('  hello  world  ') != 'hello  world':
    print('测试失败!')
elif trim('') != '':
    print('测试失败!')
elif trim('    ') != '':
    print('测试失败!')
else:
    print('测试成功!')

print('=================================================')

import random
def fun():
    number = random.randint(0, 100) # 0-100之间的随机数
    index = 0
    while True:
        if index == 5:
            print('5次没猜中，真菜，别猜了')
            break
        i = int(input('请输入随机数：'))
        # index = index + 1
        # index++
        index += 1
        if(i > number):
            print('大了')
        elif(i < number):
            print('小了')
        elif(i == number):
            print('对了')
            break
# fun()

print('=================================================')

"""
* 获取字符串
* 字符串拼接
"""

string = '曲项向天歌白毛浮绿水'
print(string[0]) # 取的第一位
print(string[-1]) # 取最后一位
print(string[1:4]) # 1取到4
print(string[2:8:3]) # 1取到4【向天歌白毛浮】，步长（间隔）为3

print('鹅鹅鹅{}红掌拨清波'.format(string))
print(f'鹅鹅鹅{string}红掌拨清波')

print('are' + ' you' + ' ok')

"""
* 数组[]
* 元祖()
* 字典{} => key+value键值对
* 函数
"""
# 1+2+3+...+99+100=?
def totalNum(start, end):
    s = 0
    n = start
    while n <= end:
        s = s + n
        n = n + 1
    return s
print(totalNum(1, 100))

"""
* 文件操作
* 文件写入：mode（w只写入、r默认只读、a追加）
* 第三方库：random（自带的库，生产随机数的库）、jieba（解霸）
"""
# 读取
f = open('lesson1.txt')
s = f.read()
print(s)
f.close()

# 新建写入或替换写入
# f2 = open('lesson2.txt', mode = 'w', encoding = 'utf-8')
# f2.write('hahaha')
# f.close()

print('=================================================')
# pip3 install jieba =》安装包结巴
# pip3 install wordcloud =》 安装词云
# pip3 list =》查询安装包列表
import random
import jieba # 结巴
from wordcloud import WordCloud # 词云

s = '''
# pip3 install jieba =》安装包结巴
# pip3 install wordcloud =》 安装词云
# pip3 list =》查询安装包列表
'''

# cut_list = jieba.lcut(s)
# new_str = ' '.join(cut_list)
# print(cut_list)
# print(new_str)
# word_cloud = WordCloud(font_path = '/System/Library/Fonts/Supplemental/Arial Unicode.ttf').generate(new_str)
# word_cloud.to_file('zs.png')

print('=================================================')
"""
* 类
* 对象
"""
class Person:
    def __init__(self, name, birthday):
        self.name = name
        self.birthday = birthday

    def say(self, world):
        print(f'{self.name}说{world}')

z = Person('张三', '2022')
z.say('您好')

print('=================================================')
"""
* 学生管理系统
"""

student_data = [
    { 'id': '1', 'name': '张三', 'age': 18 },
    { 'id': '2', 'name': '李四', 'age': 19 }
]

print(student_data)
# while True:
    # operation = input()