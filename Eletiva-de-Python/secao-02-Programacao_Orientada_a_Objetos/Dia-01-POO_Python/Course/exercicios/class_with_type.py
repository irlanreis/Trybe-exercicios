class Motorcycle:
    def __init__(self, maxspeed: str) -> None:
        self.maxspeed = maxspeed


class Truck:
    def __init__(self, maxspeed: str) -> None:
        self.maxspeed = maxspeed


cg_150 = Motorcycle("240 km/h")
truck_2000 = Truck("320 km/h")


def print_maxspeed(vehicle: Motorcycle) -> None:
    if isinstance(vehicle, Motorcycle):
        print(f"A velocidade máxima do veículo é de {vehicle.maxspeed}")
    else:
        raise TypeError("O objeto precisa ser uma motocicleta")


print_maxspeed(cg_150)
print_maxspeed(truck_2000)
