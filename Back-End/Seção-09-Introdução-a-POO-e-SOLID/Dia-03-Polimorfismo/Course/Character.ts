abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(
    private _name: string, 
    private _specialMoveName: string,
    ) {
      super();
    }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

class LongRangeCharacter extends Character {

  constructor(
   private _name: string,
   private _specialMove: string,
  ) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I can attack from a long rang.`);
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMove}`);
  }
}

const a = new MeleeCharacter('Yoshi', 'Super dragon');
console.log(a.talk());
console.log(a.specialMove());
