import { knex } from "../services";

export const getUser = () => {
  return knex.select("*").table("user");
};
