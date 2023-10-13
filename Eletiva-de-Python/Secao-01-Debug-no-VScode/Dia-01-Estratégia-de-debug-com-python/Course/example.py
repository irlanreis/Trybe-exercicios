from math import factorial


def map_factorial(n):
    result = list()

    for num in n:
        result.append(factorial(num))

    return result


def main():
    input_list = [1, 2, 3, 4, 5]
    return map_factorial(input_list)


if __name__ == "__main__":
    main()
