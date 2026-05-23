const customers = [
  { id: 1, name: "Priya Sharma", email: "priya@gmail.com", phone: "9876543210", status: "New" },
  { id: 2, name: "Rahul Verma", email: "rahul@gmail.com", phone: "9123456789", status: "Follow-up" },
  { id: 3, name: "Sneha Gupta", email: "sneha@gmail.com", phone: "9988776655", status: "Closed" },
]

export default function Customers() {
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
            </tr>
          </thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id} className="border-t border-gray-100">
                <td className="px-6 py-4 font-semibold">{c.name}</td>
                <td className="px-6 py-4 text-gray-400">{c.email}</td>
                <td className="px-6 py-4 text-gray-400">{c.phone}</td>
                <td className="px-6 py-4">{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}