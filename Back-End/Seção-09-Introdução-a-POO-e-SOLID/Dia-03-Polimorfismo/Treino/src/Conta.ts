import Pessoa from "./Pessoa";
import PositiveDecimail from "./PositiveDecimal";

class Conta {
  private _saldo: number;
  private _titular: Pessoa;
  private static MIN_VALUE = 0;

  constructor(titular: Pessoa, valorInicial: number) {
    this._titular = titular;
    this._saldo = PositiveDecimail.validaValor(valorInicial);
  }

  saldo() {
    return this._saldo;
  }

  nomeTitular() {
    return this._titular.name;
  }

  depositar(valor: number) {
    if (valor <= Conta.MIN_VALUE) {
      throw new Error('Valor Inválido!');
    }
    this._saldo += valor;
  }

  sacar(valor: number) {
    if (valor > this._saldo) {
      throw new Error('Saldo Insuficente!');
    }
    this._saldo -= valor;
  }
};

export default Conta;