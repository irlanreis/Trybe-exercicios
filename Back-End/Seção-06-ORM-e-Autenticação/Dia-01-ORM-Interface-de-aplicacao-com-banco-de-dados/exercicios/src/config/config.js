// require('dotenv').config();
const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  // port: process.env.PORT,
  dialect: 'mysql'
};

console.log(config);

module.exports = {
  development: config,
  test: config,
  production: config,
};

/*
username: usuário de acesso ao banco de dados;

password: senha de acesso ao banco de dados;

database: nome do banco de dados no qual queremos conectar;

host: servidor no qual estamos conectando - por ser local, 
utilizamos o endereço IP 127.0.0.1, ou seu alias localhost;

dialect: informa qual a biblioteca que o sequelize utiliza
para se conectar ao banco de dados estamos utilizando.
Nesse caso, mysql.*/