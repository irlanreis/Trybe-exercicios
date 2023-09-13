import matplotlib.pyplot as plt
import random

# Gerar dados aleatórios
num_bars = 5
x_labels = [f"Item {i+1}" for i in range(num_bars)]
y_values = [random.randint(1, 20) for _ in range(num_bars)]

# Criar o gráfico de barras
plt.bar(x_labels, y_values)
plt.xlabel("Itens")
plt.ylabel("Valores")
plt.title("Gráfico de Barras Aleatório")

# Mostrar o gráfico
plt.show()
