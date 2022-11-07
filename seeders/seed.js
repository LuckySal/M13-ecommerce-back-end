import sequelize from "../config/connection";
import { Category, Product, Tag } from "../models";

import categorySeedData from "./categorySeedData.json";
import productSeedData from "./productSeedData.json";
import tagSeedData from "./tagSeedData.json";

const seedDatabase = async () => {
    await sequelize({ force: true });

    const readers = await Category.bulkCreate(categorySeedData, {
        individualHooks: true,
        returning: true,
    });

    for (const { id } of readers) {
        const newCard = await LibraryCard.create({
            reader_id: id,
        });
    }

    for (const book of productSeedData) {
        const newBook = await Book.create({
            ...book,
            // Attach a random reader ID to each book
            reader_id: readers[Math.floor(Math.random() * readers.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();
