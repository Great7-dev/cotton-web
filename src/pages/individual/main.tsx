import Customers from "./customers";
import Hero from "./Hero";
import ProfileCards from "./profile-cards";
import HowItWork from "./howitwork";
import WhyChooseCotton from "./whychoose";
import { WorkforceIndividual } from "./workForce";
import FAQIndividual from "./faqIndividual";
import IndividualSoon from "./comingsoon";

const IndividualsPage = () => {
  return (
    <div className="pt-16">
      <IndividualSoon />
      <Hero />
      <ProfileCards />
      <Customers />
      <WhyChooseCotton />
      <HowItWork />
      <FAQIndividual />
      <WorkforceIndividual />
    </div>
  );
};

export default IndividualsPage;
