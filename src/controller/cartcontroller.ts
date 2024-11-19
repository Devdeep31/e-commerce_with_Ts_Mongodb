import { Request, Response } from 'express';
import Cart from '../models/cart';
import Product from '../models/products';

export const createCart = async (req: Request, res: Response) => {
  const { userId, items } = req.body;  

  try {

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
 
      cart = new Cart({
        user: userId,
        items: [],
        totalPrice: 0,
      });
    }

  
    for (let item of items) {
      
      const product = await Product.findById(item.productId);
      if (!product) {
       
        res.status(404).json({ error: `Product with ID ${item.productId} not found!` });
        return; 
      }

    
      const existingItem = cart.items.find(i => i.productId.toString() === item.productId);
      if (existingItem) {
        
        existingItem.quantity += item.quantity;
      } else {
      
        cart.items.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price, 
        });
      }
    }

    
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    
    await cart.save();

   
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create or update cart' });
  }
};
