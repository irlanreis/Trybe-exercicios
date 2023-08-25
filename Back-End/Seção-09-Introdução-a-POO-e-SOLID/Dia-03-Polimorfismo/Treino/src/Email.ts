class Email {
  private value: string;
  private static emailRegex =  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;

  constructor(valueEmail: string) {
    this.value = this.validaEmail(valueEmail)
  };

  private validaEmail(email: string): string {
    if (!Email.emailRegex.test(email)) {
      throw new Error('Email inválido!Favor checar!.');  
    }
    return email;
  }

  
  public getValue() {
    return this.value;
  }
};

export default Email;
