def multiply_array(array1, array2):
    result = []
    number_of_iterations = 0

    for number in array1:
        print(f"Array 1: {number}")
        for number in array2:
            print(f"Array 2: {number}")
            result.append(number * number)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    print(result)
    return result


meu_array = [1, 2, 3, 4, 5]

multiply_array(meu_array, meu_array)
