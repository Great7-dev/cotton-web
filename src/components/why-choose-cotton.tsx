import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function WhyChooseCotton() {
  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 md:mb-5">
          <h2 className="text-2xl md:text-3xl font-medium text-[#0E121B] font-['InterDisplay']">
            Here is why people choose{" "}
            <span className="text-[#1FC16B] italic">Cotton</span>
          </h2>
          <p className="mt-3 text-[#525866] max-w-[623px]">
            Trusted, reliable, and built for convenience, Cotton delivers
            seamless <br /> solutions tailored to your needs, so you can focus
            on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
          {/* Feature 1 */}
          <Card className="border-y-0 border-x border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            {" "}
            <CardHeader className="pb-10 border-0">
              <div className="text-6xl md:text-7xl text-[#1FC16B] font-['InterDisplay']">
                01
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <h3 className="text-xl font-medium text-[#0E121B]">
                Real World Skills
              </h3>
              <p className="text-[#525866]">
                Our programs provide in-demand skills across tech and trades,
                ensuring participants are job-ready and able to contribute
                meaningfully to the economy from day one.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border-y-0 border-x border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-10">
              <div className="text-6xl md:text-7xl text-[#1FC16B] font-['InterDisplay']">
                02
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <h3 className="text-xl font-medium text-[#0E121B]">
                End-to-End Support
              </h3>
              <p className="text-[#525866]">
                Cotton provides a comprehensive end-to-end training,
                certification, and career growth opportunities, creating real
                value for organisations and individuals.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border-y-0 border-x border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-10">
              <div className="text-6xl md:text-7xl text-[#1FC16B] font-['InterDisplay']">
                03
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <h3 className="text-xl font-medium text-[#0E121B]">
                Built for the Future
              </h3>
              <p className="text-[#525866]">
                The world is evolving fast. With Cotton, you're not just
                upskilling your workforce, you're preparing them for the future
                with cutting-edge, market-ready training.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
