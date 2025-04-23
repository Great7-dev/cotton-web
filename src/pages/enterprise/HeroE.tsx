import { Button } from "@/components/ui/button";
// import stars from "../../assets/stars.svg";

export default function HeroE() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero content */}
      <div className="max-w-4xl mx-auto px-4 py-3 md:py-2 text-center">
        {/* Coming soon banner */}
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-2 leading-tight font-['InterDisplay']">
          Smart Solutions, <br className="hidden sm:block" /> Built for Every
          Business.
        </h1>

        {/* Subtext */}
        <p className="text-[#525866] mb-3 max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-['InterDisplay']">
          Cotton for Enterprise simplifies business operations with seamless
          procurement, trusted vendor recruitment and collaboration,
          professional hiring, and project management.
        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-6 mb-10">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-emerald-600 text-white px-8 w-[180px] md:w-[200px]"
          >
            Order service
          </Button>
          <button
            // size="lg"
            // variant="outline"
            className="text-gray-700 border border-gray-200 px-8 w-[180px] md:w-[200px] text-[14px] rounded-lg bg-white hover:bg-gray-50"
          >
            Provide service
          </button>
        </div>
      </div>
    </div>
  );
}
