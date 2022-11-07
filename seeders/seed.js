const sequelize = require("../config/connection");
const { Category, Product, Tag } = require("../models");

const categorySeedData = require("./categorySeedData.json");
const productSeedData = require("./productSeedData.json");
const tagSeedData = require("./tagSeedData.json");

const seedDatabase = async () => {
    await sequelize({ force: true });

    process.exit(0);
};

seedDatabase();
