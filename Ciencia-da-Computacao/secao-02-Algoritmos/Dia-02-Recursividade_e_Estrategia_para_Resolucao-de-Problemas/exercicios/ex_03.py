def find_big_number(list, length):
    if length == 1:
        return list[0]
    else:
        biggest_on_the_list = find_big_number(list, length - 1)
        if biggest_on_the_list > list[length - 1]:
            return biggest_on_the_list
        else:
            return list[length - 1]


def big_num_integer(list):
    length = len(list)
    return find_big_number(list, length)


print(big_num_integer([1, 3, 22, 251, 565, 32, 355]))
