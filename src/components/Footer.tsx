"use client";

import { Divider } from "@heroui/divider";
import { Icon } from "@iconify/react";
// import OrderService from "./OrderService";
// import ProviderRequest from "./ProviderRequest";
import { Link } from "react-router";
import playstore from "../assets/playstore.jpg";
import apple from "../assets/apple.png";

// import { OrderService, ProviderRequest } from "./";

const Footer = () => {
  return (
    <footer className=" bg-[#072C19]  ">
      <div
        className=" lg:px-28 px-6 pt-14 pb-28 text-white text-sm max-w-screen-2xl mx-auto "
        // data-aos="fade-up"
        // data-aos-duration="3000"
      >
        <div className="flex justify-between lg:flex-nowrap flex-wrap lg:gap-0 gap-10 ">
          <div className=" space-y-3">
            <div className="font-semibold text-xl">Company</div>
            <ul className="space-y-3">
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
                <Link to="/#about_us">About us</Link>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
                <Link to="/#services">Services</Link>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
                <Link to="/#faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-3">
            <div className="font-semibold text-xl">What we offer</div>
            <ul className="space-y-3">
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
                <Link to="/individual">Cotton for Individuals</Link>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
                <Link to="/enterprise">Cotton for Enterprise</Link>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
                <Link to="/">Cotton as a Service </Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-3">
            <div className="font-semibold text-xl">Legals</div>
            <ul className="space-y-3">
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400">
                <Link to="/terms"> Terms and conditions </Link>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400 cursor-pointer">
                <Link to="/cookies">Cookie policy</Link>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:text-slate-400">
                <Link to="/privacy">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-xl mb-5">Support</div>
            <Link
              className="transition-all duration-300 ease-in-out hover:text-slate-400"
              to="mailto:support@usecotton.io"
            >
              support@usecotton.io
            </Link>
            <div className="flex items-center gap-10 text-xl mt-5">
              <Link
                className="transition-all duration-300 ease-in-out text-white hover:text-slate-400 hover:text-xl"
                to="https://x.com/appcotton78309?s=11"
                target="_blank"
              >
                <Icon className="" icon="pajamas:twitter" />
              </Link>
              <Link
                className="transition-all duration-300 ease-in-out text-white hover:text-slate-400 hover:text-xl"
                to="https://www.linkedin.com/company/usecotton/"
                target="_blank"
              >
                <Icon icon="devicon:linkedin" />
              </Link>
              <Link
                className="transition-all duration-300 ease-in-out text-white hover:text-slate-400 hover:text-xl"
                to="https://www.instagram.com/cottonapp?igsh=a2oxbHZvbzJmeXly&utm_source=qr"
                target="_blank"
              >
                <Icon icon="skill-icons:instagram" />
              </Link>
              <Link
                className="transition-all duration-300 ease-in-out text-white hover:text-slate-400 hover:text-xl"
                to="https://www.facebook.com/share/p/19SJGW7E5y/?mibextid=WC7FNe"
                target="_blank"
              >
                <Icon icon="bi:facebook" />
              </Link>
            </div>
          </div>
        </div>
        <Divider className=" my-16 bg-white" />
        <div className="flex justify-between items-center text-lg lg:flex-nowrap flex-wrap lg:gap-0 gap-8">
          <div>&copy; {new Date().getFullYear()} - Cotton Services</div>
          <div>S.95, Tafawa Balewa Square, Race Course, Onikan, Lagos.</div>
          <div className="flex flex-col md:flex-row gap-4">
            <img src={playstore} alt="" style={{ borderRadius: "10px" }} />
            <img src={apple} alt="" />
          </div>
          {/* <AppDownloadLink inverted /> */}
          {/* <JoinWaitList /> */}
          {/* <div className="flex md:flex-row flex-col items-center gap-6 md:w-auto w-full">
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <OrderService fullWidth /> */
}
{
  /* <ProviderRequest
              fullWidth
              className="bg-white dark:bg-transparent"
            /> */
}
