import Email from "./Email";
import { IPessoa } from "./Interfaces/IPessoa";

class Pessoa implements IPessoa {
  name: string;
  email: Email;

  constructor(nome: string, email: Email) {
    this.name = nome;
    this.email = email;
  }
;
};

export default Pessoa;