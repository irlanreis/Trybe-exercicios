const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  //Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

  const getInfo = (obj, name) => {

    const allLessons = [];
    let allStudent = 0;
    
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      };
    };
    return { lessons: allLessons, estudantes: allStudent };
  };
  
  const createReport = (allLessons, name) => {

    const report = {};

    report.professor = name;

    Object.assign(report, getInfo(allLessons, name));

    return report;

  }
  
  console.log(createReport(allLessons, 'Maria Clara'));
