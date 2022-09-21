const techList = (arrayTechnologies, name) => {
    if (arrayTechnologies.length === 0) return 'Vazio!';

    const sortedArray = arrayTechnologies.sort();
    const tecnologyList = [];

    for (let index = 0; index < sortedArray.length; index += 1) {
        tecnologyList.push({
            tech: sortedArray[index],
            name: name,
        })

    }
    return tecnologyList;
}
module.exports = techList;   