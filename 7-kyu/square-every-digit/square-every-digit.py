def square_digits(num):
    return int(''.join(str(int(d) * int(d)) for d in str(num)))