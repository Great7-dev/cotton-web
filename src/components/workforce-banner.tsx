import { Button } from "./ui/button";
import dot from "../assets/dots.svg";

export function WorkforceBanner() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-[#151515] text-white rounded-lg overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:p-8 flex flex-col justify-center md:max-w-[60%]">
            <h1 className="text-2xl md:text-3xl font-mediul mb-2 font-['InterDisplay']">
              Ready to <span className="text-[#1FC16B] italic">Empower</span>
              <br />
              Your Workforce?
            </h1>
            <p className="text-sm md:text-base mb-6 font-['InterDisplay']">
              Let's build a brighter future together by creating an economy
              where everyone can thrive.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-emerald-600 transition-colors text-white text-center py-2 px-4 rounded-md w-full md:w-[376px] h-10"
            >
              Speak to our team
            </Button>
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

// function DotPattern() {
//     return (
//         <div className="absolute inset-0 flex items-center justify-center">
//             <div className="grid grid-cols-10 gap-2">
//                 {/* {Array.from({ length: 100 }).map((_, i) => {
//                     const color =
//                         i % 11 === 0
//                             ? "bg-yellow-400"
//                             : i % 5 === 0
//                                 ? "bg-emerald-400"
//                                 : i % 3 === 0
//                                     ? "bg-emerald-500"
//                                     : "bg-gray-800"

//                     return <div key={i} className={`w-2 h-2 rounded-full ${color}`} />
//                 })} */}
//                 <img src={dot} alt="" />
//             </div>
//         </div>
//     )
// }
