import Conta from "./Conta";
import Email from "./Email";
import Pessoa from "./Pessoa";

const jaqueline = new Pessoa('Jaqueline Reis', new Email('jaquelinreis@reis.com'));

const Jaqueline = new Conta(jaqueline, 1800);

console.log(Jaqueline);

