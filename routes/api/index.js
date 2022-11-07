const router = require("express").Router();
import categoryRoutes from "./categoryRoutes";
import productRoutes from "./productRoutes";
import tagRoutes from "./tagRoutes";

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

export default router;
