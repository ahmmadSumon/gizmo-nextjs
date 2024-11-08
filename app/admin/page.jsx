"use client"
import { useEffect, useState } from 'react';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/getOrders');
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-8 mt-40">
      <h2 className="text-2xl font-bold">Admin Orders</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
        <thead>
          <tr>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Email</th>
            <th className="p-2 border-b">Address</th>
            <th className="p-2 border-b">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="p-2 border-b">{order.name}</td>
              <td className="p-2 border-b">{order.email}</td>
              <td className="p-2 border-b">{order.address}, {order.city}, {order.state} {order.zipCode}</td>
              <td className="p-2 border-b">{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
