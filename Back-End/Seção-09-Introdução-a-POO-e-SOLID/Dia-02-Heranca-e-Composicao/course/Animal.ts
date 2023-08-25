class Animal {
  constructor(protected birthDate: Date) {} // Private
}

class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate);
  }
}