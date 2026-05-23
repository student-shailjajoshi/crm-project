function FeatureCard({ icon, title, description }) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default function Features() {
  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10">
        Why Use Our CRM?
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <FeatureCard icon="👥" title="Manage Contacts" description="Keep all your customer info in one place" />
        <FeatureCard icon="📊" title="Track Status" description="Know who needs follow-up and who is closed" />
        <FeatureCard icon="📅" title="Schedule Meetings" description="Never miss a meeting with your customers" />
      </div>
    </div>
  )
}