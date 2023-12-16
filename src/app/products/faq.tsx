import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export function FAQ() {
  return (
    <div className="mx-auto mt-20 max-w-3xl px-8 md:max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold md:text-2xl">
            Frequently Asked Questions
          </AccordionTrigger>
          <AccordionContent className="mb-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I place an order?</AccordionTrigger>
                <AccordionContent className="text-xs text-slate-600 dark:text-slate-400">
                  To place an order, simply browse our collection, select the desired T-shirts,
                  choose the size and quantity, and click on the "Add to Cart" button. Follow the
                  checkout process to enter your shipping details and payment information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-xs text-slate-600 dark:text-slate-400">
                  We accept major credit cards, including Visa, MasterCard, American Express, and
                  Discover. Additionally, we offer secure payments through PayPal for added
                  convenience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent className="text-xs text-slate-600 dark:text-slate-400">
                  Once your order has been shipped, you will receive a confirmation email with a
                  tracking number. Use this tracking number to monitor the progress of your shipment
                  on our website or the respective courier's tracking page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is your return and exchange policy?</AccordionTrigger>
                <AccordionContent className="text-xs text-slate-600 dark:text-slate-400">
                  We want you to be completely satisfied with your purchase. If you receive a
                  damaged or incorrect item, please contact our customer support within 14 days of
                  receiving your order for assistance. For more details, please refer to our Returns
                  & Exchanges policy.{' '}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                <AccordionContent className="text-xs text-slate-600 dark:text-slate-400">
                  You can reach our customer support team via email at help@aliimam.in or through
                  our Contact Us page. We aim to respond to all inquiries within 24 hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
