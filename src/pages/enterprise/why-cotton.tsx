import icon from "../../assets/icon.svg";

export default function CottonLandingE() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#e6f7f0] rounded-2xl">
        <div className="mb-2 md:mb-3 p-6">
          <h2 className="text-xl md:text-2xl font-medium text-[#0E121B] font-['InterDisplay'] italic">
            Why Cotton stands out?
          </h2>
          <div className="mt-3 md:mt-5">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0E121B]">
              We are{" "}
              <span className="text-[#178C4E] font-['InterDisplay'] italic">
                redefining
              </span>{" "}
              what it <br /> means to deliver{" "}
              <span className="text-[#178C4E] font-['InterDisplay'] italic">
                value
              </span>
              .
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 p-6">
          {/* Feature 1 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627] font-['InterDisplay']">
              Risk-Free Project Execution
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base font-['InterDisplay']">
              Cotton’s indemnity coverage and performance bonds provide
              businesses with the confidence that their projects will be
              executed without risk. If anything goes wrong, we step in to
              ensure peace of mind.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627] font-['InterDisplay']">
              Simplified Procurement
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base font-['InterDisplay']">
              From RFQs to bidding and contract management, our platform
              simplifies procurement and vendor management for enterprises. You
              can trust that you're working with the best professionals and
              service providers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627] font-['InterDisplay']">
              Access to a Network of Experts
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base font-['InterDisplay']">
              Whether you need a consultant, vendor, or service provider, Cotton
              has a vast network of verified professionals that can meet your
              needs. You can hire and subcontract talent at the click of a
              button.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627]">
              Seamless Project Tracking
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base font-['InterDisplay']">
              Track the status and performance of all your projects in
              real-time. Our dashboard gives you a clear view of each project's
              progress, helping you manage timelines, budgets, and outcomes.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627] font-['InterDisplay']">
              Full Control and Transparency
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base font-['InterDisplay']">
              Cotton gives you full control over your projects. From initiating
              RFQs to managing vendors and tracking performance, you have
              complete transparency every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
