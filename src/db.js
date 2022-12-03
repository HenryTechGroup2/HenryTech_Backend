import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } = process.env;

// const sequelize = new Sequelize(
//   `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
//   {
//     logging: false,
//     native: false,
//     dialectModule: pg,
//   }
// );
const sequelize = new Sequelize(
  `postgres://postgres:43486277@localhost:5432/henrytech`,
  {
    logging: false,
    native: false,
    dialectModule: pg,
  }
);
export default sequelize;
