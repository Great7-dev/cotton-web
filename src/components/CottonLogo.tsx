"use client";

import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import { Image } from "@heroui/image";

// import { FullLogo, FullLogoWhite } from "@/public/assets";
import FullLogo from "../assets/full_logo.svg"
import FullLogoWhite from "../assets/full_logo_white.svg";

const CottonLogo = () => {
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  return (
    <>
      {theme === "light" || isSSR ? (
        <Image
          alt="logo"
          className="outline-none"
          src={FullLogo}
          width={80}
        />
      ) : (
        <Image
          alt="logo2"
          className=" outline-none"
          src={FullLogoWhite}
          width={80}
        />
      )}
    </>
  );
};

export default CottonLogo;
