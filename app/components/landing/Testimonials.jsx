export default function Testimonials() {
  return (
    <div className="py-16 px-8 bg-[#f4f6fb]">
      <h2 className="text-2xl font-bold text-center mb-10">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-500 mb-4">
            "This CRM helped me manage 100+ customers easily!"
          </p>
          <p className="font-bold">— Rahul Verma</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-500 mb-4">
            "Best tool for tracking my sales pipeline."
          </p>
          <p className="font-bold">— Priya Sharma</p>
        </div>
      </div>
    </div>
  )
}