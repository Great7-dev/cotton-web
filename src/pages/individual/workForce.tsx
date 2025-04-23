import { Button } from "@/components/ui/button";
import dot from "../../assets/dots.svg";

export function WorkforceIndividual() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-[#151515] text-white rounded-lg overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:p-8 flex flex-col justify-center md:max-w-[60%]">
            <h1 className="text-2xl md:text-3xl font-mediul mb-2 font-['InterDisplay']">
              Ready to <br />
              <span className="text-[#1FC16B] italic">Simplify</span> Your Life?
            </h1>
            <p className="text-sm md:text-base mb-6 font-['InterDisplay']">
              Don’t let your to-do list overwhelm you. Let Cotton’s
              professionals handle it with ease.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-emerald-600 text-white px-4 sm:px-8 w-full sm:w-[180px] md:w-[200px] font-['InterDisplay']"
              >
                Order service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white sm:text-white bg-white sm:bg-gray-300 border-gray-300 px-4 sm:px-8 w-full sm:w-[180px] md:w-[200px] font-['InterDisplay'] hover:bg-gray-100 sm:hover:bg-gray-400"
              >
                Provide service
              </Button>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-8">
              {" "}
              <Button
                size="lg"
                className="bg-green-600 hover:bg-emerald-600 text-white px-4 sm:px-8 w-full sm:w-[180px] md:w-[200px] font-['InterDisplay']"
              >
                Order service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white sm:text-white bg-white sm:bg-gray-300 border-gray-300 px-4 sm:px-8 w-full sm:w-[180px] md:w-[200px] font-['InterDisplay'] hover:bg-gray-100 sm:hover:bg-gray-400"
              >
                Provide service
              </Button>
            </div>
          </div>
          <div className="relative flex-1 min-h-[160px]">
            <img
              src={dot || "/placeholder.svg"}
              alt=""
              className="absolute right-0 top-10 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
