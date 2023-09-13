import cv2
import numpy as np


def remove_background(
    input_image_path, output_image_path, lower_bound, upper_bound
):
    # Carrega a imagem de entrada
    image = cv2.imread(input_image_path)

    # Converte a imagem para o espaço de cores HSV
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Define os limites inferiores e superiores para a cor do fundo
    lower_color = np.array(lower_bound, dtype=np.uint8)
    upper_color = np.array(upper_bound, dtype=np.uint8)

    # Cria uma máscara para os pixels que estão dentro dos limites da cor do
    # fundo
    mask = cv2.inRange(hsv, lower_color, upper_color)

    # Inverte a máscara para selecionar o objeto em vez do fundo
    mask = cv2.bitwise_not(mask)

    # Extrai o objeto da imagem original usando a máscara
    result = cv2.bitwise_and(image, image, mask=mask)

    # Salva a imagem resultante
    cv2.imwrite(output_image_path, result)


if __name__ == "__main__":
    input_image_path = (
        "input.jpg"  # Substitua pelo caminho da sua imagem de entrada
    )
    output_image_path = "output.jpg"  # Substitua pelo caminho onde deseja salvar a imagem de saída

    # Defina os limites de cor do fundo (esses valores são apenas um exemplo)
    lower_bound = [
        35,
        100,
        100,
    ]  # Limite inferior da cor do fundo em espaço HSV
    upper_bound = [
        85,
        255,
        255,
    ]  # Limite superior da cor do fundo em espaço HSV

    remove_background(
        input_image_path, output_image_path, lower_bound, upper_bound
    )
