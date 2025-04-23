import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQIndividual() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#0E121B] mb-6 font-['InterDisplay']">
          Questions? <br />
          <span className="text-[#178C4E] italic">Answers</span>
        </h2>
        <Accordion type="multiple">
          <AccordionItem value="item1">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              Can I make a service request on the website?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Yes, you can make your request directly on the Cotton website.
              Once submitted, our team will review the details and match you
              with a qualified service provider near you. Our mobile app is also
              in the works and will be live soon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              How do I get matched with a service provider?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              After submitting your service request on the website, our team
              carefully reviews the request and matches you with the best
              available service provider from our vetted network. This ensures
              you receive quality service from trusted professionals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item3">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              How does payment work on Cotton?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Payments are made directly to Cotton and held securely. The funds
              are only released to the service provider after the service has
              been completed and you’ve confirmed you’re satisfied. This ensures
              fairness and protects both parties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item4">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              Can I review or rate a service provider?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Absolutely. After your service is completed, you can rate and
              review your experience to help others make informed choices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
