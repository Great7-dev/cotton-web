import { Button } from "@/components/ui/button";
import line from "../../assets/line.svg";

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero content */}
      <div className="max-w-4xl mx-auto px-4 md:py-2 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-3 font-['InterDisplay']">
          Making{" "}
          <span className="text-green-600  relative inline-block mr-2 italic">
            Life Easier
            <img
              src={line}
              alt=""
              className="absolute left-0 bottom-[-0.5rem] w-full"
            />
          </span>
          <br />
          <p className="mt-1">One Task at a Time.</p>
        </h1>

        <p className="text-[#525866] mb-3 max-w-3xl mx-auto text-base md:text-lg">
          We know life gets busy, so let Cotton take care of the tasks. From
          cleaning to event planning, we handle every task or need, giving you
          more time to focus on what truly matters.
        </p>

        {/* Buttons - adjusted to match image */}
        <div className="flex justify-center gap-6 mb-4">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-emerald-600 text-white px-8 w-[180px] md:w-[200px]"
          >
            Order service
          </Button>
          <button
            // size="lg"
            // variant="outline"
            className="text-gray-700 border border-gray-200 px-8 w-[180px] md:w-[200px] rounded-lg bg-white hover:bg-gray-50"
          >
            Provide service
          </button>
        </div>
      </div>
    </div>
  );
}
