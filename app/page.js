"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const res = await axios.post('/api/users', { name, email });
      console.log(res.data); 
      setError("Something went wrong. Please try again."); 
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create user</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        
        <div>
          <label className="block text-sm font-bold">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            placeholder="Enter your Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading} 
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
