interface Personagem {
  name: string;
  nivel: number;
  classe: string;
  atacar(): void;
  defender(): void;
}

export default Personagem;