import man from "../../assets/newman.svg";

const howItWorksSteps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    description:
      "Select the service you need from our predefined list of services, or submit a custom request tailored to your specific needs. We are here to assist you every step of the way.",
  },
  {
    number: "02",
    title: "Get matched With a Professional",
    description:
      "Our verified and highly reliable experts are carefully selected to match your specific requirements, ensuring you receive the best service and expertise for your needs.",
  },
  {
    number: "03",
    title: "Sit Back and Relax",
    description:
      "Sit back and enjoy a hassle-free experience while Cotton takes care of every detail, from start to finish, ensuring a smooth and seamless process tailored to your needs.",
  },
];

export default function HowItWork() {
  return (
    <section className="bg-[#020D07] text-white py-16 px-6 sm:px-10 md:px-20 lg:px-32">
      <h2 className="text-2xl sm:text-3xl font-medium pb-5 font-['InterDisplay']">
        This is how we <span className="text-[#1FC16B]">work</span>
      </h2>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="space-y-20">
            {howItWorksSteps.map((step, index) => (
              <div key={index}>
                <h3 className="text-[#1FC16B] font-medium text-lg mb-5 font-['InterDisplay']">
                  {step.number}{" "}
                  <span className="text-white font-medium font-['InterDisplay'] ml-3">
                    {step.title}
                  </span>
                </h3>
                <p className="text-white text-sm font-['InterDisplay']">
                  {step.description}
                </p>
                <div className="border-b border-[#08301B] pt-10"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center px-4 lg:px-10">
          <img
            src={man}
            alt="Professional Worker"
            className="rounded-xl w-full max-w-[500px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
