const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: `${process.env.DB_DATABASE}-${process.env.NODE_ENV}`,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

console.log(config);

module.exports = {
  [process.env.NODE_ENV]: config
};