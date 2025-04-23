import { useState } from "react";
import { motion } from "motion/react";
import firstman from "../../assets/firstman.png";
import firstwoman from "../../assets/firstwoman.png";
import secondman from "../../assets/secondman.png";
import secondwoman from "../../assets/secondwoman.png";
import thirdman from "../../assets/thirdman.png";

type ProfileCardProps = {
  name: string;
  title: string;
  image: string;
  color: string;
  textColor?: string;
  overlayOpacity?: number;
  overlayColor?: string;
};

const profiles: ProfileCardProps[] = [
  {
    name: "Uchenna Agbasi",
    title: "FRONTEND ENGINEER",
    image: firstman,
    color: "#FF8447",
    textColor: "#572500",
    overlayColor: "#FFFFFF", // White overlay
    overlayOpacity: 0.15,
  },
  {
    name: "Dayo Aluko",
    title: "TAILOR",
    image: firstwoman,
    color: "#3EE089",
    textColor: "#0B4C2F",
    overlayColor: "#D5D5D5", // Light gray overlay
    overlayOpacity: 0.25,
  },
  {
    name: "Chukwudi Agu",
    title: "AUTO MECHANIC",
    image: secondman,
    color: "#6898FF",
    textColor: "#002057",
    overlayColor: "#AEAEAE", // Medium gray overlay
    overlayOpacity: 0.35,
  },
  {
    name: "Tari Ebikake",
    title: "SOCIAL MEDIA STRATEGIST",
    image: secondwoman,
    color: "#AFE03E",
    textColor: "#3C4C0B",
    overlayColor: "#999999", // Dark gray overlay
    overlayOpacity: 0.45,
  },
  {
    name: "Yusuf Aliyu",
    title: "LAWYER",
    image: thirdman,
    color: "#FFD268",
    textColor: "#573F00",
    overlayColor: "#FFFFFF", // White overlay again
    overlayOpacity: 0.2,
  },
];

const getCardStyles = (index: number, total: number) => {
  const center = Math.floor(total / 2);
  const distanceFromCenter = Math.abs(index - center);

  let verticalOffset = 0;
  if (distanceFromCenter === 0) {
    verticalOffset = 25;
  } else if (distanceFromCenter === 1) {
    verticalOffset = 8.33;
  } else {
    verticalOffset = 10.33;
  }

  let scale = 1;
  if (distanceFromCenter === 0) {
    scale = 1.15;
  } else if (distanceFromCenter === 1) {
    scale = 1.05;
  }

  let zIndex = 10 - distanceFromCenter;
  if (index < center) zIndex -= 5;

  return { verticalOffset, scale, zIndex };
};

const ProfileCard = ({
  name,
  title,
  image,
  color,
  textColor,
  overlayOpacity,
}: ProfileCardProps) => {
  return (
    <div
      className="relative flex flex-col rounded-[10.33px] p-4 w-[206.6px] h-[263.54px] shadow-lg overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="text-center mb-2" style={{ color: textColor }}>
        <h3 className="text-lg font-bold font-['InterDisplay']">{name}</h3>
        <p className="text-xs uppercase tracking-wide opacity-70 font-['InterDisplay']">
          {title}
        </p>
      </div>

      <div className="flex items-end justify-center flex-grow mt-auto relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full absolute inset-0"
        />

        {/* Color overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              ${color}00 0%,
              ${color}${Math.floor(overlayOpacity! * 255)
              .toString(16)
              .padStart(2, "0")} 50%,
              ${color} 100%
            )`,
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
};

export default function ProfileCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-4 overflow-hidden">
      {" "}
      {/* Reduced vertical padding and removed min-h-screen */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop and tablet version */}
        <div className="hidden md:flex justify-center items-center relative h-[400px]">
          <div
            className="flex relative"
            style={{ width: "fit-content", padding: "0 40px" }}
          >
            {profiles.map((profile, index) => {
              const { verticalOffset, scale, zIndex } = getCardStyles(
                index,
                profiles.length
              );

              return (
                <motion.div
                  key={index}
                  className="relative"
                  style={{
                    height: "320px",
                    marginLeft: index === 0 ? "0" : "-10px",
                    marginTop: `${verticalOffset}px`,
                    zIndex: hoveredIndex === index ? 50 : zIndex,
                    transform: `scale(${scale})`,
                    transformOrigin: "bottom center",
                  }}
                  initial={{ scale }}
                  whileHover={{
                    scale: scale + 0.05,
                    zIndex: 50,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ProfileCard {...profile} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden overflow-x-auto pb-8 -mx-4 px-4">
          <div
            className="flex items-center"
            style={{ width: "max-content", padding: "20px 60px 20px 20px" }}
          >
            {profiles.map((profile, index) => {
              const center = Math.floor(profiles.length / 2);
              const distanceFromCenter = Math.abs(index - center);
              const verticalOffset =
                distanceFromCenter === 0
                  ? -15
                  : distanceFromCenter === 1
                  ? -5
                  : 0;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  style={{
                    width: "160px",
                    height: "280px",
                    marginLeft: index === 0 ? "0" : "-10px",
                    marginTop: `${verticalOffset}px`,
                    zIndex: profiles.length - distanceFromCenter,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 50,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <ProfileCard {...profile} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
