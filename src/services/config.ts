const db = {
  host: "127.0.0.1",
  user: "root",
  password: "?Yakup5488",
  database: "periodtrackerdb",
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
