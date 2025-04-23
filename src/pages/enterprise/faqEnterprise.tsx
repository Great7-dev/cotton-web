import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQEnterprise() {
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
              How do businesses register on Cotton?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Enterprise users can sign up on the Cotton web platform by
              providing company details, undergoing verification, and setting up
              a business profile.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              Can I manage multiple service orders at once?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Yes. The enterprise dashboard allows you to track, manage, and
              monitor all service engagements in one place.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item3">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              How are quotes handled for large service requests?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Service providers submit quotes after reviewing your request. You
              can compare all submissions and select the most suitable offer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item4">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              Is there a long-term contracting option?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Yes. You can select between one-off services or long-term
              contracts, with flexible payment terms (daily, monthly, yearly).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item5">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              Will I get reports and analytics on service usage?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Yes. Cotton for Enterprise includes a dashboard with reporting and
              analytics to help you monitor performance and make data-driven
              decisions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item6">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              How does bid management work for service requests?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              When you submit a service request, all vetted providers within
              that service category are notified. Each provider has the
              opportunity to submit a quote. You’ll be able to view, compare,
              and manage all bids directly from your dashboard, selecting the
              one that best aligns with your needs and budget.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item7">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              What financing options are available on Cotton for Enterprise?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Cotton provides flexible financing solutions to support your
              service engagements. These include vendor financing, business
              loans, and access to bank instruments such as bank guarantees and
              letters of credit. These tools help ease cash flow constraints and
              ensure service continuity for your business.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
