
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  
  const newObj = {...user, ...jobInfos};

  const { name, age, nationality, profession, squad,  squadInitials} = newObj;

  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}.I work as a ${profession} and my squal is ${squadInitials}-${squad}.`);
  //Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic

  //Hi, my name is Maria, I'm 21 years old and I'm Brazilian.I work as a Software engineer and my squal is RLL-Rocket Landing Logic.
