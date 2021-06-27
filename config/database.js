module.exports = {
  url:
    process.env.DATABASE_URL ||
    "postgres://postgres:root@localhost:5432/property_listing",
  options: {
    // "postgres://postgres:password@localhost:5432/real_estate_database",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
    operatorsAliases: false,
  },
};
