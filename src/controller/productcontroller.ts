import { Request,Response } from "express";
import products from "../models/products";

export const createProduct = async (req:Request, res:Response) =>{
    try{
        const {productId,productName,price} = req.body;
        const newProduct = await products.create({productId,productName,price});
        res.status(201).json(newProduct);
    }catch(error){
        res.status(500).json({ error: "Failed to create product" });
    }
}