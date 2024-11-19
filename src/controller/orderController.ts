import { Request, Response } from "express";
import Order from "../models/orders"; // Import your model
import Cart from "../models/cart";


export const createOrder = async (req: Request, res: Response) => {
    const { userId, cartId, orderId, deliveryTime } = req.body;
  
    try {
      const cart = await Cart.findById(cartId).populate('items.productId');
      const newOrder = new Order({
        orderId,
        user: userId,
        cart: cartId,
        deliveryTime,
      });
  
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  };
  
  export const getOrderDetails = async (req: Request, res: Response) => {
    const { orderId } = req.params;
  
    try {
     
      const order = await Order.findOne({ orderId })
        .populate({
          path: 'cart',
          populate: {
            path: 'items.productId',
            model: 'Product', 
          },
        });
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch order details' });
    }
  };