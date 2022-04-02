def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError('bad operand type，错啦')
    if x >= 0:
        return x
    else:
        return -x
