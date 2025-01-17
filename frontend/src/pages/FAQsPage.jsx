import Accordion from "../components/common/Accordion";

export default function FAQsPage() {
    return (
        <>
            <div className="w-full min-h-screen mt-24 font-poppins bg-white flex flex-col pt-10 max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">
                    FAQs
                </h1>
                <div className="mt-5 border-t border-black">
                    <Accordion
                        title="How do I get my crush's email address?"
                        answer="Go to outlook and search your crush's full name, their bristol email will show up and you can use it for the app"
                    />
                    <Accordion
                        title="How safe is my data?"
                        answer="All data is encrypted, which means we, the creators don't have access to it and no one else can see it. Everything is private and all data will be cleared after the website goes down."
                    />
                    <Accordion
                        title="When does the website go down?"
                        answer="It will go down on 24th February, 2025. All data will be deleted on that date. Based on popularity, the website maybe up for a bit longer."
                    />
                    <Accordion
                        title="Another probably important FAQ?"
                        answer="It will go down on 24th February, 2025. All data will be deleted on that date. Based on popularity, the website maybe up for a bit longer."
                    />
                    <Accordion
                        title="Another probably important FAQ?"
                        answer="It will go down on 24th February, 2025. All data will be deleted on that date. Based on popularity, the website maybe up for a bit longer."
                    />
                </div>
            </div>
        </>
    );
}
