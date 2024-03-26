import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <Accordion className="mx-auto w-xl" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>This is Shadcn on Tailwind 4?</AccordionTrigger>
        <AccordionContent>Yes. even the animations!</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
