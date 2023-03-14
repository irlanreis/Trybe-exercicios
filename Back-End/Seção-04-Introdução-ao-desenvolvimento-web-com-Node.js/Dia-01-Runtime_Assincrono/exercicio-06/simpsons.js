const fs = require('fs').promises;

async function readAll() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

    strings.forEach((string) => console.log(string));
};

async function getSimpsonById(id) {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const chosenSimposon = simpsons.find((simpson) => Number(simpson.id) === id);

    if(!chosenSimposon) {
        throw new error('id não encontrado');
    };

    return chosenSimposon; 
};

async function filterSimpson() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

    const simpsons = JSON.parse(fileContent);

    const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

    return newArray;
};

async function createSimpsonFamily() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

    const simpsons = JSON.parse(fileContent)

    const familyIds = [1, 2, 3, 4];
    const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

    return simpsonsFamily;
};

async function addNelsonToFamily() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent);

    simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

    return simpsonsFamily;
};

async function replaceNelson() {
    const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

    // const simpsonsWithoutMaggi = simpsonsWithoutNelson.concat([{ id: '15', name: 'Maggi Simpson' }]);
    const simpsonsWithoutMaggie = [ ...simpsonsWithoutNelson, simpsonsWithoutMaggie ];

    fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsWithoutMaggie));

    return simpsonsWithoutMaggie;
}

async function main() {
    const simpsonAll = await readAll();
    const simpson = await getSimpsonById(2);
    const simpsonFiltered = await filterSimpson()
    const createSimpson = await createSimpsonFamily()
    const addNelson = await addNelsonToFamily()
    const replaceNelsonForId = await replaceNelson()

    console.log(simpsonAll);
    console.log(simpson);
    console.log(simpsonFiltered);
    console.log(createSimpson);
    console.log(addNelson);
    console.log(replaceNelsonForId);
};

main();