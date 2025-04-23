const features = [
  {
    number: "01",
    title: "100% Indemnity Coverage",
    description:
      "We offer tailored coverage for professionals, so you can focus on your work while we handle the rest.",
  },
  {
    number: "02",
    title: "Verified and Vetted Staff",
    description:
      "Our expert team is rigorously vetted to ensure top-tier skill, reliability, and professionalism.",
  },
  {
    number: "03",
    title: "Seamless Booking Flow",
    description:
      "Book your service in seconds and track real-time updates for a seamless, hassle-free experience.",
  },
  {
    number: "04",
    title: "Wide Range of Services",
    description:
      "From groceries to event planning, Cotton simplifies your everyday tasks.",
  },
];

export default function WhyChooseCotton() {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Here is why people choose{" "}
          <span className="text-green-600 font-inter italic">Cotton</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted, reliable, and built for convenience, Cotton delivers seamless
          solutions tailored to your needs, so you can focus on what matters
          most.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-green-600 text-3xl font-bold mb-4">
              {feature.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
