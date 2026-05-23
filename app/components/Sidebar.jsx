import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="bg-[#0f172a] text-white w-48 min-h-screen py-6 px-3">
      <h2 className="text-lg font-bold text-emerald-400 px-3 mb-6">CRM</h2>
      <ul className="flex flex-col gap-1">
        <li>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm">
            📊 Dashboard
          </Link>
        </li>
        <li>
          <Link href="/customers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm">
            👥 Customers
          </Link>
        </li>
        <li>
          <Link href="/login" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm">
            🔐 Login
          </Link>
        </li>
      </ul>
    </aside>
  )
}