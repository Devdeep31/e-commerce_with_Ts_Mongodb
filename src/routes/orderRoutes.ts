import express from "express";
import { createOrder} from "../controller/ordercontroller"; 

const router = express.Router();
router.post("/orders",createOrder)


export default router;
