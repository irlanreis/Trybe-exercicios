class PositiveDecimail {
  static validaValor(valor: number) {
    const MIN_VALUE = 0;
    if (valor < MIN_VALUE) {
      throw new Error(`Valor não deve ser menor que ${MIN_VALUE}!`);
    }
    return valor;
  }
}

export default PositiveDecimail;