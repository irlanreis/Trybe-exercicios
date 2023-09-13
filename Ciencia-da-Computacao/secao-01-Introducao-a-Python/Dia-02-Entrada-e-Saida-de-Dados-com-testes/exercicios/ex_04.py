import json
import csv


def rettrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentagem_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    write = csv.writer(file)
    write.writerow(header)
    write.writerow(rows)


if __name__ == "__main__":
    # retrive books
    with open("data_books.json") as file:
        books = rettrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percetage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentagem_by_category(
        book_count_by_category, number_of_books
    )


# write csv
header = ["categoria", "percentagem"]
with open("report.csv", "w") as file:
    write_csv_report(file, header, books_percentage_rows)
