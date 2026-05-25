export default function CustomerCard({ name, email, phone, status, onDelete, onStatusChange }) {
  const statusColor = {
    "New": "bg-emerald-100 text-emerald-700",
    "Follow-up": "bg-amber-100 text-amber-700",
    "Closed": "bg-rose-100 text-rose-700",
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-gray-400 text-sm mb-1">{email}</p>
      <p className="text-gray-400 text-sm mb-4">{phone}</p>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[status]}`}>
        {status}
      </span>
      <div className="flex gap-2 mt-4">
        <button
          onClick={onStatusChange}
          className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-xs font-medium"
        >
          Change Status →
        </button>
        <button
          onClick={onDelete}
          className="bg-rose-50 hover:bg-rose-100 text-rose-500 px-3 py-1 rounded-lg text-xs font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  )
}