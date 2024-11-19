import express from "express";
import { createCart } from "../controller/cartcontroller"; 

const router = express.Router();


router.post("/cart", createCart);

export default router;
