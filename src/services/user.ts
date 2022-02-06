import { query } from "./db";

export const getUser = (callback) => {
  query("Select * from user", (result) => callback && callback(result));
};
