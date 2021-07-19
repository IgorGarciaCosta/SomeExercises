def basic_calculator(a, o, b):
    result = 0

    if o == "+":
        return a + b
    elif o == "-":
        return a - b
    elif o == "/":
        if b == 0:
            return None
        return a / b
    elif o == "*":
        return a * b
    else:
        return None
    return result


while True:
    fst = input("Enter your 1st value: ")
    op = input("Enter your operator: ")
    snd = input("Enter your 2nd value: ")
    print(basic_calculator(int(fst), op, int(snd)))
