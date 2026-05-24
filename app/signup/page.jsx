'use client'
import { useState } from 'react'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all Fields!")
      return
    }
    alert("Account Created!")
  }

  return (
    <div className="flex items-center justify-center py-16">
      <div className="bg-white rounded-2xl shadow p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <input
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 outline-none focus:border-emerald-400"
          placeholder="Full Name"
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
        <input
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 outline-none focus:border-emerald-400"
          placeholder="Email"
          onChange={(e) => setForm({...form, email: e.target.value})}
        />
        <input
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-6 outline-none focus:border-emerald-400"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        <button
          className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}