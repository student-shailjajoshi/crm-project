'use client'
import { useState } from 'react'
import CustomerCard from '../components/CustomerCard'

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

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [form, setForm] = useState({ name: '', email: '', phone: '', status: 'New' })
  const [showForm, setShowForm] = useState(false)

  const changeStatus = (id) => {
    setCustomers(customers.map(c =>
      c.id === id ? { ...c, status: statusFlow[c.status] } : c
    ))
  }

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id))
  }

  const addCustomer = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Sab fields bharo!")
      return
    }
    setCustomers([...customers, { ...form, id: Date.now() }])
    setForm({ name: '', email: '', phone: '', status: 'New' })
    setShowForm(false)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-emerald-500 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-600"
        >
          + Add Customer
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="font-bold mb-4">New Customer</h2>
          <input
            className="w-full border rounded-xl px-4 py-3 text-sm mb-3 outline-none"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full border rounded-xl px-4 py-3 text-sm mb-3 outline-none"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full border rounded-xl px-4 py-3 text-sm mb-4 outline-none"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <button
            onClick={addCustomer}
            className="bg-emerald-500 text-white px-6 py-2 rounded-xl text-sm font-semibold"
          >
            Add
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {customers.map(c => (
          <CustomerCard
            key={c.id}
            {...c}
            onStatusChange={() => changeStatus(c.id)}
            onDelete={() => deleteCustomer(c.id)}
          />
        ))}
      </div>
    </div>
  )
}