const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Crie uma função que retorna o dano do dragão.
const dragonAttack = (dragon) => {
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random() * dragon.strength)
    //Vamos adicionar nosso retorno. Caso nossa multiplicação seja menor do que 15, devemos retornar 15, senão retornamos o valor da multiplicação.
    const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
    return dragonDmg
};
//Crie uma função que retorna o dano causado pelo warrior.
const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = minDmg * warrior.weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg)
    return warriorDamage;
};


//Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

//Vamos definir os valores de dano máximo e mínimo.
const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'not enough mana...',
    };
    return turnStats;
};

//Crie a primeira HOF que compõe o objeto gameActions
const gameActions = {
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        dragon.healthPoints -= warriorDamage;
        warrior.damage = warriorDamage;
    },

    mageTurn: (mageAttack) => {
        const mageTurnStats = mageAttack(mage);
        const mageDamage = mageTurnStats.damageDealt;
        mage.damage = mageDamage;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints = mageDamage;
    },
    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
}
gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
