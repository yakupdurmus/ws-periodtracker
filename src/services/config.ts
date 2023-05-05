const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const config = {
  connectionType: "knex",
  knexConnection: {
    client: "mysql",
    connection: {
      port: 3306,
      ...db,
    },
  },
};
export default config;

