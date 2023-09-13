import csv

with open("graduacao_unb.csv", encoding="utf8") as file:
    graduacao_header = csv.reader(file, delimiter=",", quotechar='"')
    # usando conceito de desempacotamento
    header, *data = graduacao_header

group_by_department = {}
for row in data:
    department = row[15]
    if department not in group_by_department:
        group_by_department[department] = 0
    group_by_department[department] += 1

# Escreve o  relatório em .csv
# Abre um arquivo para a escrita
with open("department_report.csv", mode="w", encoding="utf-8") as file:
    writer = csv.writer(file)

    # Escrever o cabeçalho
    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    writer.writerow(headers)

    # Escrever as linhas de dados]
    # Desempacotamento de valores
    for department, grades in group_by_department.items():
        # Agrupa o dado com o turno
        row = [
            department,
            grades,
        ]
        writer.writerow(row)
