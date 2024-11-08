// pages/api/getOrders.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    // Retrieve all orders from the "orders" collection
    const orders = await db.collection('orders').find().toArray();

    client.close();

    res.status(200).json(orders);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
