import { Button } from "@/components/ui/button";
import line from "../assets/line.svg";

export default function Hero() {
  return (
    <section className="w-full md:pt-16 lg:pt-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center mb-2">
          <h1
            className="font-medium text-black text-3xl md:text-4xl lg:text-5xl leading-none font-['InterDisplay']"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-[#1FC16B] relative inline-block mr-2">
              Empowering
              <img
                src={line}
                alt=""
                className="absolute left-0 bottom-[-0.5rem] w-full"
              />
            </span>
            the Future
            <br />
            <p className="mt-1">Workforce, One Skill at a Time</p>
          </h1>
        </div>

        <p className="text-gray-500 max-w-2xl mx-auto mb-4 md:mb-6 text-[18px] font-['InterDisplay']">
          We equip teams and communities with practical skills through
          innovative, capacity building and technology transfer trainings,
          driving growth and creating impact.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-emerald-600 text-white px-8 w-[180px] md:w-[200px] text-[14px]"
          >
            Order service
          </Button>
          <button className="text-gray-700 border border-gray-200 px-8 w-[180px] md:w-[200px] rounded-lg bg-white hover:bg-gray-50 text-[14px]">
            Provide service
          </button>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
