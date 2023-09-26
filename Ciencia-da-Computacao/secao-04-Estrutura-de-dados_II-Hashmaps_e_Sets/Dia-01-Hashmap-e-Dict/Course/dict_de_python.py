# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = 'name1'
employee_registry[10] = 'name9'
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[14] = 'name30'


print(f"Novo valor do id ,após a atualização: {employee_registry[14]}")
