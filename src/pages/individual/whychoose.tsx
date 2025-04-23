import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function WhyChooseCotton() {
  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-medium text-[#0E121B] font-['InterDisplay']">
            Here is why people choose{" "}
            <span className="text-[#1FC16B] italic">Cotton</span>
          </h2>
          <p className="mt-3 text-[#525866] max-w-[623px]font-['InterDisplay'] ">
            Trusted, reliable, and built for convenience, Cotton delivers
            seamless <br /> solutions tailored to your needs, so you can focus
            on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
          {/* Feature 1 */}
          <Card className="border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-10">
              <div className="text-6xl md:text-7xl text-[#1FC16B] font-['InterDisplay']">
                01
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <h3 className="text-xl font-medium text-[#0E121B] font-['InterDisplay']">
                100% Indemnity Coverage
              </h3>
              <p className="text-[#525866] flex-grow font-['InterDisplay']">
                We offer tailored coverage for professionals, so you can focus
                on your work while we handle the rest
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-10">
              <div className="text-6xl md:text-7xl  text-green-600 font-['InterDisplay']">
                02
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <h3 className="text-xl font-medium text-[#0E121B] font-['InterDisplay']">
                Verified and Vetted Staff
              </h3>
              <p className="text-[#525866] flex-grow font-['InterDisplay']">
                Our expert team is rigorously vetted to ensure top-tier skill,
                reliability, and professionalism.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-10">
              <div className="text-6xl md:text-7xl  text-green-600 font-['InterDisplay']">
                03
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <h3 className="text-xl font-medium text-[#0E121B] font-['InterDisplay']">
                Seamless Booking Flow
              </h3>
              <p className="text-[#525866] flex-grow font-['InterDisplay']">
                Book your service in seconds and track real-time updates for a
                seamless, hassle-free experience.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-10">
              <div className="text-6xl md:text-7xl text-green-600 font-['InterDisplay']">
                04
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <h3 className="text-xl font-medium text-[#0E121B] font-['InterDisplay']">
                Wide Range of Services
              </h3>
              <p className="text-[#525866] flex-grow font-['InterDisplay']">
                From groceries to event planning, Cotton simplifies your
                everyday tasks.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
