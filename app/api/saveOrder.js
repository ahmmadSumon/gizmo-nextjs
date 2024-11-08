// pages/api/saveOrder.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, address, city, state, zipCode, cardNumber, expirationDate, cvv } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    // Insert the order data into the "orders" collection
    await db.collection('orders').insertOne({
      name,
      email,
      address,
      city,
      state,
      zipCode,
      cardNumber,
      expirationDate,
      cvv,
      createdAt: new Date(),
    });

    client.close();

    res.status(201).json({ message: 'Order saved successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
