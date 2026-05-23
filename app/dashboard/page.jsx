function StatCard({ label, count, color }) {
  return (
    <div className={`${color} rounded-2xl p-6 text-white`}>
      <h2 className="text-4xl font-bold">{count}</h2>
      <p className="mt-2 opacity-80">{label}</p>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Customers" count={5} color="bg-[#0f172a]" />
        <StatCard label="New" count={2} color="bg-emerald-500" />
        <StatCard label="Follow-up" count={2} color="bg-amber-400" />
        <StatCard label="Closed" count={1} color="bg-rose-400" />
      </div>
    </div>
  )
}