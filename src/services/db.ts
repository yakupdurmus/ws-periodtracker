import mysql from "mysql";
import config from "../config";

let connection: mysql.Connection | undefined;

const initConnect = () => {
  connection = mysql.createConnection(config.db);
};

export const startConnect = () => {
  connection.connect((err) => {
    if (err) throw err;
  });
};

export const stopConnect = () => {
  connection.destroy();
};

export const query = async (query?: string, callback?: (result) => void) => {
  connection.query(query, (err, result) => {
    if (err) throw err;
    callback && callback(result);
  });
};

initConnect();
startConnect();
