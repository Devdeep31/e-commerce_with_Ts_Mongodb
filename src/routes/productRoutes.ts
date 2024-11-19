import express from "express";
import { createProduct } from "../controller/productcontroller";

const router = express.Router();

router.post("/products",createProduct);

export default router;