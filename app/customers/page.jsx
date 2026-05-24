'use client'
import { useState } from 'react'

const initialCustomers = [
  { id: 1, name: "Priya Sharma", email: "priya@gmail.com", phone: "9876543210", status: "New" },
  { id: 2, name: "Rahul Verma", email: "rahul@gmail.com", phone: "9123456789", status: "Follow-up" },
  { id: 3, name: "Sneha Gupta", email: "sneha@gmail.com", phone: "9988776655", status: "Closed" },
  { id: 4, name: "Amit Patel", email: "amit@gmail.com", phone: "9011223344", status: "New" },
  { id: 5, name: "Neha Singh", email: "neha@gmail.com", phone: "9765432100", status: "Follow-up" },
]

const statusFlow = {
  "New": "Follow-up",
  "Follow-up": "Closed",
  "Closed": "New"
}

const statusColor = {
  "New": "bg-emerald-100 text-emerald-700",
  "Follow-up": "bg-amber-100 text-amber-700",
  "Closed": "bg-rose-100 text-rose-700",
}

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers)

  const changeStatus = (id) => {
    setCustomers(customers.map(c =>
      c.id === id ? { ...c, status: statusFlow[c.status] } : c
    ))
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-gray-400">
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Phone</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id} className="border-t border-gray-100">
                <td className="px-6 py-4 font-semibold">{c.name}</td>
                <td className="px-6 py-4 text-gray-400">{c.email}</td>
                <td className="px-6 py-4 text-gray-400">{c.phone}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[c.status]}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => changeStatus(c.id)}
                    className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-xs font-medium"
                  >
                    Change Status →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}