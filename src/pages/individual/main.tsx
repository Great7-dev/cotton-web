import Customers from "./customers";
import Hero from "./Hero";
import HowItWork from "./howitwork";
import WhyChooseCotton from "./whychoose";
import { WorkforceIndividual } from "./workForce";
import FAQIndividual from "./faqIndividual";
import IndividualSoon from "./comingsoon";
import { Profilecards } from "./profile-cards";

const IndividualsPage = () => {
  return (
    <div className="pt-16">
      <IndividualSoon />
      <Hero />
      <Profilecards />
      <Customers />
      <WhyChooseCotton />
      <HowItWork />
      <FAQIndividual />
      <WorkforceIndividual />
    </div>
  );
};

export default IndividualsPage;
