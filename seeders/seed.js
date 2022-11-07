import sequelize from "../config/connection";
import { Category, Product, Tag } from "../models";

import categorySeedData from "./categorySeedData.json";
import productSeedData from "./productSeedData.json";
import tagSeedData from "./tagSeedData.json";

const seedDatabase = async () => {
    await sequelize({ force: true });

    process.exit(0);
};

seedDatabase();
