import HeroE from "./HeroE";
import ImageSlider from "./imageslider";
import CottonLandingE from "./why-cotton";
import EnterpriseBentoGrid from "./enterprisebentogrid";
import { WorkForceEnterprise } from "./workForceEnterprise";
import FAQEnterprise from "./faqEnterprise";
import EnterpriseSoon from "./soonEnter";

const MainPage = () => {
  return (
    <div className="pt-16">
      <EnterpriseSoon />
      <HeroE />
      <ImageSlider />
      <EnterpriseBentoGrid />
      <CottonLandingE />
      <FAQEnterprise />
      <WorkForceEnterprise />
    </div>
  );
};

export default MainPage;
