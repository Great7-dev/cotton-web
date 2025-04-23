import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
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
              What does “Cotton as a Service” provide?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              It enables organizations to tap into our infrastructure, vetted
              talent, and operational expertise to run development, consulting,
              and impact projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              Who can use Cotton as a Service?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              It is ideal for governments, NGOs, institutions, and corporations
              looking for end-to-end project execution or outsourced operational
              capabilities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item3">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              Is there project management support available?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Yes. Our service includes dedicated project teams and engagement
              managers to ensure successful delivery.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item4">
            <AccordionTrigger className="text-[#0E121B] font-['InterDisplay']">
              How do I get started with Cotton as a Service?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Reach out via our contact page or request a consultation. Our team
              will assess your needs and tailor a solution for your
              organization.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
