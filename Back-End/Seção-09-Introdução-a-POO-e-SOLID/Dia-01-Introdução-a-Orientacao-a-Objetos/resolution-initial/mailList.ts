class MailList {
  // Essa sintaxe no construtor é chamada `Parameter Properties`
  // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado
  constructor(private mailList: Email[] = []) { }

  get all(): Email[] { return this.mailList; }

  getEmailsBySender(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getEmailsTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getEmailsBySubject(searchString: string): Email[] {
    return this.mailList.filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }

  addEmail(newEmail: Email): void { this.mailList.push(newEmail); }

  removeEmail(mailRemove: Email): void {
    // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma.
    this.mailList = this.mailList.filter((mail) => mail !== mailRemove);
  }
}