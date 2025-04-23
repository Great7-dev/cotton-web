import icon from "../assets/icon.svg";

export default function CottonLanding() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#e6f7f0] rounded-2xl">
        <div className="mb-2 md:mb-3 p-6">
          <h2 className="text-xl md:text-2xl font-medium text-[#0E121B] font-['InterDisplay'] italic">
            Why Cotton stands out?
          </h2>
          <div className="mt-3 md:mt-5">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0E121B] font-['InterDisplay']">
              We are <span className="text-[#178C4E] italic">redefining</span>{" "}
              what it <br /> means to deliver{" "}
              <span className="text-[#178C4E] italic">value</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 p-6">
          {/* Feature 1 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627]">
              Customizable Learning Journeys
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base">
              We offer fully customisable training programs designed to meet
              your organisation's unique needs—whether you're looking to
              up-skill employees, empower local communities, or drive long-term
              growth.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627]">
              Skill Development That Goes Beyond Training
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base">
              At Cotton, we combine training with real-world application and
              hands-on experience. Participants gain practical skills they can
              apply immediately, ensuring a smooth transition into the
              workforce.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627]">
              Empowerment through Technology & Artisanship
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base">
              We blend technology with artisan craftsmanship, offering diverse
              training in digital skills and traditional crafts to empower
              individuals and support thriving businesses and communities.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-transparent flex flex-col items-start">
            <img src={icon} alt="icon" width={32} height={32} />
            <h3 className="font-medium text-lg text-[#0B4627]">
              Seamless Onboarding with Cotton for Individuals
            </h3>
            <p className="mt-2 text-[#0B4627] text-sm md:text-base">
              After certification, individuals join Cotton for Individuals, an
              app offering easy access to job placements, gig opportunities, and
              self-service options, empowering them to shape their future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
