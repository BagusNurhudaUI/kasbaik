module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "fadil123",
    DB: "nyobatest",
    dialect: "postgresql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};