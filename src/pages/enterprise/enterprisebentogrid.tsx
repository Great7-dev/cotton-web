import team from "../../assets/team.svg";
import project from "../../assets/project.svg";
import security from "../../assets/security.svg";
import tracking from "../../assets/tracking.svg";
import qoutes from "../../assets/quotes.svg";
import first from "../../assets/Frame 37032.png";
import second from "../../assets/Frame 37030.png";
import padlock from "../../assets/Frame 37047.png";
import fourth from "../../assets/Frame 37048.png";
import fifth from "../../assets/Frame 37049.png";

export default function EnterpriseBentoGrid() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 pt-5">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-medium mb-2 font-['InterDisplay']">
          Empower Your Business with{" "}
          <span className="text-[#1FC16B] italic">Cotton</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto font-['InterDisplay']">
          We enable your business run smoothly and efficiently by offering
          everything you need on one platform.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {/* First Card */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 relative">
          {/* Mobile: Text-only overlay */}
          <div className="md:hidden absolute inset-0 bg-white p-4 flex flex-col items-center justify-center text-center z-10">
            <div className="flex items-center gap-2 text-[#1FC16B] text-xs">
              <img src={qoutes} alt="Quotes icon" className="w-4 h-4" />
              <span>Quick Quotes</span>
            </div>
            <h2 className="text-sm font-bold mt-1 text-[#0E121B] font-['InterDisplay']">
              Request For Quotes (RFQ)
            </h2>
            <p className="text-xs text-[#525866] mt-1 font-['InterDisplay']">
              Put up a Request for Quotes for your project and let trusted
              vendors and service providers bid. Get the best options tailored
              to your needs, at the right price.
            </p>
          </div>

          {/* Desktop: Full card content */}
          <div className="relative w-full aspect-[4/2] overflow-hidden">
            <img
              src={first}
              alt="RFQ"
              className="w-full h-full object-cover object-center md:block"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-gray-100/90 from-50% via-gray-50/80 to-transparent md:block" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-[#1FC16B] text-xs md:text-sm">
                <img
                  src={qoutes}
                  alt="Quotes icon"
                  className="w-3 h-3 md:w-3 md:h-3"
                />
                <span>Quick Quotes</span>
              </div>
              <h2 className="text-sm md:text-base font-bold mt-1 text-[#0E121B] font-['InterDisplay']">
                Request For Quotes (RFQ)
              </h2>
              <p className="text-xs md:text-sm text-[#525866] mt-1 font-['InterDisplay']">
                Put up a Request for Quotes for your project and let trusted
                vendors and service providers bid. Get the best options tailored
                to your needs, at the right price.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 relative">
          {/* Mobile: Text-only overlay */}
          <div className="md:hidden absolute inset-0 bg-white p-4 flex flex-col items-center justify-center text-center z-10">
            <div className="flex items-center gap-2 text-[#1FC16B] text-xs">
              <img src={project} alt="project" className="w-4 h-4" />
              <span>Project Management</span>
            </div>
            <h2 className="text-sm font-bold mt-1 text-[#0E121B] font-['InterDisplay']">
              Streamlined Project Management
            </h2>
            <p className="text-xs text-[#525866] mt-1 font-['InterDisplay']">
              Track your projects in real-time, ensuring that deadlines, quality
              standards, and budgets are met. Whether it's managing one project
              or multiple, Cotton has your back.
            </p>
          </div>

          {/* Desktop: Full card content */}
          <div className="relative w-full aspect-[4/2] overflow-hidden">
            <img
              src={second}
              alt="Project Management"
              className="w-full h-full object-cover object-center md:block"
            />
            {/* Gray gradient overlay with opacity */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-gray-100/90 from-50% via-gray-50/80 to-transparent md:block" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-[#1FC16B] text-xs md:text-sm">
                <img
                  src={project}
                  alt="project"
                  className="w-3 h-3 md:w-3 md:h-3"
                />
                <span>Project Management</span>
              </div>
              <h2 className="text-sm md:text-base font-bold mt-1 text-[#0E121B] font-['InterDisplay']">
                Streamlined Project Management
              </h2>
              <p className="text-xs md:text-sm text-[#525866] mt-1 font-['InterDisplay']">
                Track your projects in real-time, ensuring that deadlines,
                quality standards, and budgets are met. Whether it's managing
                one project or multiple, Cotton has your back.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - 3 cards (1/3 width each on medium and larger screens) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 mt-1 md:mt-2 text-center">
        {/* Indemnity and Performance Bond Card */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 relative text-center">
          <div className="relative w-full overflow-hidden">
            {/* Image */}
            <img
              src={padlock}
              alt="Indemnity and Performance Bond"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />

            {/* Deep fade */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-100/90 from-50% via-gray-50/80 to-transparent md:block" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-[#1FC16B] text-xs md:text-sm">
                <img
                  src={security}
                  alt="security"
                  className="w-3 h-3 md:w-3 md:h-3"
                />
                <span>Security</span>
              </div>
              <h2 className="text-[16px] font-bold mt-1 text-[#0E121B] font-['InterDisplay']">
                Indemnity and Performance Bond
              </h2>

              <p className="text-xs text-[#525866] mt-1 font-['InterDisplay']">
                Enjoy the security and trust that comes with Cotton's indemnity
                coverage and performance bond. If something goes wrong, we've
                got you covered.
              </p>
            </div>
          </div>
        </div>

        {/* Business to Vendor Collaboration Card */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 relative text-center">
          <div className="relative w-full overflow-hidden">
            {/* Image */}
            <img
              src={fourth}
              alt="Business to Vendor Collaboration"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />

            {/* Deep fading overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-100/90 from-50% via-gray-50/80 to-transparent md:block" />

            {/* Text content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-[#1FC16B] text-xs md:text-sm">
                <img src={team} alt="team" className="w-3 h-3 md:w-3 md:h-3" />
                <span>Team work</span>
              </div>

              <h2 className="text-[16px] font-bold mt-1 text-[#0E121B] font-['InterDisplay']">
                Business to Vendor Collaboration
              </h2>

              <p className="text-xs text-[#525866] mt-1 font-['InterDisplay']">
                Seamlessly collaborate with vendors, manage contracts, and
                streamline subcontracting—all in one easy-to-use platform.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Tracking Card */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 relative text-center">
          <div className="relative w-full overflow-hidden">
            {/* Image */}
            <img
              src={fifth}
              alt="Performance Tracking"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />

            {/* Deep fading overlay */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-gray-100/90 from-65% via-gray-50/80 to-transparent md:block" />

            {/* Text content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-[#1FC16B] text-xs md:text-sm">
                <img
                  src={tracking}
                  alt="tracking"
                  className="w-3 h-3 md:w-3 md:h-3"
                />
                <span>Project Tracking</span>
              </div>

              <h2 className="text-[16px] font-bold mt-1 text-[#0E121B] font-['InterDisplay']">
                Comprehensive Performance Tracking
              </h2>

              <p className="text-xs text-[#525866] mt-1 font-['InterDisplay']">
                Monitor every phase of your project and measure success with our
                performance tracking tools, ensuring everything stays on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
