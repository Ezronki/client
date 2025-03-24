import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const AdminBalanceEditor = () => {
  const [email, setEmail] = useState("");
  const [bal, setBalance] = useState(0.00);

  const handleUpdateBalance = async (e) => {
    e.preventDefault();

    const formattedBalance = parseFloat(bal).toFixed(2);

    try {
      const response = await axios.put(
        `${API_URL}/api/admin/products/update-balance/${encodeURIComponent(email)}`,
        { bal: formattedBalance },
        { withCredentials: true }
      );

      toast.success(response.data.message || "Balance updated successfully!");
      setEmail("");
      setBalance(0.00);
    } catch (error) {
      console.error("Error updating balance:", error.response?.data);
      toast.error(error.response?.data?.message || "Failed to update balance.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-6 text-center">Update User Balance</h1>
      <form onSubmit={handleUpdateBalance} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">New Balance</label>
          <input
            type="number"
            value={bal}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0) setBalance(value);
            }}
            placeholder="0.00"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Update Balance
        </button>
      </form>
    </div>
  );
};

export default AdminBalanceEditor;