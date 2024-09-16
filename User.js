const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

const User = db.define(
  "nebula_data",
  {
    email: { type: Sequelize.STRING, primaryKey: true },
    a_comp: { type: Sequelize.STRING },
    attendance: { type: Sequelize.DECIMAL },
    cohort: { type: Sequelize.STRING },
    compliance: { type: Sequelize.STRING },
    personal_email: { type: Sequelize.STRING },
    q_comp: { type: Sequelize.STRING },
    quiz: { type: Sequelize.INTEGER },
    rank: { type: Sequelize.INTEGER },
    score: { type: Sequelize.DECIMAL },
    student: { type: Sequelize.STRING },
  },
  {
    timestamps: false,
  }
);

module.exports = User;

// User.sync({ alter: true })
//   .then(() => {
//     console.log("Table created successfully");
//   })
//   .catch((error) => {
//     console.error("Error creating table:", error);
//   });
