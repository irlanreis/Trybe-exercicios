type PersonalInfo = {
  name: string;
  birthYear: number;
};

function printId(id: number | string) {
  console.log(`You Id is ${id}`);

  if (typeof id === "string") {
    return console.log(`Sou o ${id.toUpperCase()}`);
  }
  return console.log(id);
};

printId("1 em touppercase");