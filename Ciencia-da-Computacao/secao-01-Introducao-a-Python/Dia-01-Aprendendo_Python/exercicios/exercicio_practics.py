def bigger(value, other):
    if other > value:
        return other
    return value


def average(value):
    total = 0
    for number in value:
        # total = total + number
        total += number
        print(f"A soma os números é {total}")
    return total / len(value)


def draw_square(n):
    for row in range(n):
        print(n * "*")


def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


def paint_costs(area):
    cant_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * cant_price


def type_of_triangule(side1, side2, side3):
    is_triangule = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangule:
        return 'não é triângulo'
    elif side1 == side2 == side3:
        return 'equilátero'
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return 'isósceno'
    else:
        return 'escaleno'
