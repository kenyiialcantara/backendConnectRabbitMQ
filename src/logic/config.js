import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  RABBIT_HOST: process.env.RABBIT_HOST,
};
