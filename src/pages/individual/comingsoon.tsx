import stars from "../../assets/stars.svg";

export default function IndividualSoon() {
  return (
    <div className="flex flex-col items-center pt-10 md:pt-20 px-4">
      <div className="w-full max-w-2xl mb-6 md:mb-8 bg-[#E9FBF2] rounded-3xl md:rounded-full flex flex-col md:flex-row items-center p-4 md:p-0">
        {/* Button - centered on mobile, left-aligned on desktop */}
        <button className="bg-[#1FC16B] text-white text-sm font-medium px-2 py-0.5 rounded-full flex items-center justify-center gap-2  md:my-1 md:ml-1 font-['InterDisplay']">
          <img
            src={stars || "/placeholder.svg"}
            alt="Stars"
            className="h-3 w-3"
          />
          <span className="font-['InterDisplay'] text-[14px]">Coming soon</span>
        </button>

        {/* Text - centered below on mobile, inline on desktop */}
        <span className="text-[#178C4E] text-sm text-center md:text-left md:px-4  md:py-2 font-['InterDisplay']">
          Get ready for a smoother, faster experience - our mobile app is
          launching soon!
        </span>
      </div>
    </div>
  );
}
