import Accordion from "../components/common/Accordion";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function FAQsPage() {
  useDocumentTitle("FAQs");

  const faqs = [
    {
      title: "How do I get my crush's email address?",
      answer:
        "Go to Microsoft Outlook and search your crush's full name, their Bristol email will show up and you can use it on Bristol Link",
    },
    {
      title: "How safe is my data?",
      answer:
        "All data is encrypted, which means anyone without the secret encryption key would not be able to see it. Everything is private and all data will be cleared after the website goes down.",
    },
    {
      title: "When does the website go down?",
      answer:
        "It will go down on 1st March, 2025. All data will be deleted on that date. Based on popularity, the website maybe up for a bit longer.",
    },
    {
      title:
        "I got an email saying my crush is interested in someone else. Do I get another try?",
      answer:
        "Yes, you'll get an infinite number of tries until you find a match.",
    },
    {
      title: "Can someone enter my email in more than once?",
      answer:
        "No, you can only enter a specific email one time. If someone has been notified that their crush is unavailable, they don't have the ability to resend a message to that person.",
    },
  ];

  return (
    <>
      <div className="font-poppins w-full min-h-screen mt-24 flex flex-col pt-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center motion-opacity-in-0 motion-duration-[2s]">
          FAQs
        </h1>
        <div className="mx-5 mt-5 border-t border-gray-400">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              index={index}
              title={faq.title}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </>
  );
}
