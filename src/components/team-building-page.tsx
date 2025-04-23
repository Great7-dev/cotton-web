import boardroom from "../assets/boardroom.jpg";
import greenLeaf from "../assets/greenleaf.svg";
import yellowLeaf from "../assets/yellowleaf.svg";
import offering from "../assets/offering.svg";
export default function TeamBuildingPage() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-medium sm:text-4xl font-['InterDisplay']">
            Build a team with{" "}
            <span className="text-green-400 italic">Purpose</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-[#0E121B] font-['InterDisplay']">
            We equip individuals and businesses with the right skills,
            trainings, and connections to thrive in today's economy.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-2">
          {/* Content with Cut Corner - Our Offerings aligned with background */}
          <div className="relative mt-6 border-none">
            {/* Our Offerings Button - positioned to overlap the cut corner */}
            <div className="absolute -top-0 left-0 z-10">
              <div className="inline-flex items-center gap-1 rounded-2xl bg-[#E6F9EF] px-4 py-2 ">
                <div className="w-3 h-3">
                  <img src={offering} alt="offering" />
                </div>
                <span className="font-bold text-[#0B4627] whitespace-nowrap">
                  Our Offerings
                </span>
              </div>
            </div>

            {/* Background with cut corner */}
            <div className="bg-[#F5F7FA] border-[#E1E4EA] border-none rounded-2xl p-6 ">
              {/* Create the cut corner effect in top left */}
              <div
                className="absolute top-0 left-0 w-40 h-12 bg-white rounded-br-xl overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
                }}
              ></div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Corporate & Public Partnerships */}
                <div className="md:border-r border-gray-200 pr-6 mt-10">
                  <h2 className="text-xl font-bold mb-3 text-[#0E121B]">
                    Corporate & Public Partnerships
                  </h2>
                  <p className="text-[#0E121B]">
                    We collaborate with businesses, CSR initiatives, and public
                    institutions to design capacity building and technology
                    transfer programs that drive real impact and long-term
                    success.
                  </p>
                </div>

                {/* Growth Acceleration */}
                <div className="mt-10">
                  <h2 className="text-xl font-bold mb-3 text-[#0E121B]">
                    Growth Acceleration
                  </h2>
                  <p className="text-[#0E121B]">
                    Through career development, support, and business growth
                    programs, we equip individuals and organizations with the
                    resources they need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Green Box */}
          <div className="relative rounded-[12px] p-6 text-white bg-[#0B4627] overflow-hidden min-h-[250px] flex flex-col">
            <img
              src={greenLeaf}
              alt="Green Box Image"
              className="absolute top-0 right-0 w-32 h-32 object-cover"
            />
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-[24px] mb-3">
                Empowering the Next Generation
              </h3>
              <p className="mb-6 text-white/90 text-[16px]">
                We provide young talent with industry-relevant skills,
                mentorship, and hands-on training, ensuring they are
                well-equipped to succeed in today's job market.
              </p>
            </div>
            <button className="text-sm font-medium underline self-start mt-auto ">
              Contact us
            </button>
          </div>

          {/* Yellow Box */}
          {/* <div className="relative rounded-[12px] p-6 text-white bg-[#E6A819] overflow-hidden"> */}
          <div className="relative rounded-[12px] p-6 text-white bg-[#E6A819] overflow-hidden min-h-[250px] flex flex-col">
            <img
              src={yellowLeaf}
              alt="Yellow Box Image"
              className="absolute top-0 right-0 w-32 h-32 object-cover"
            />
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-[24px] mb-3">
                Stronger Teams, Greater Impact
              </h3>
              <p className="mb-6 text-white/90 text-[16px]">
                Our tailored training programs help businesses develop their
                teams, enhance productivity, and stay ahead in an ever-evolving
                workplace.
              </p>
            </div>
            <button className="text-sm font-medium underline self-start mt-auto">
              Speak to our team
            </button>
          </div>

          {/* Image Box */}
          <div className="rounded-lg overflow-hidden relative h-64 md:h-auto">
            <img
              src={boardroom}
              alt="Team collaboration"
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
