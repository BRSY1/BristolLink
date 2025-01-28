import useDocumentTitle from "../hooks/useDocumentTitle";

export default function PrivacyStatementPage() {
  useDocumentTitle("Privacy Statement");
  
  return (
    <>
      <div className="w-full min-h-screen p-5 lg:pt-20 bg-white flex flex-col justify-center max-w lg:overflow-hidden motion-opacity-in-0 motion-duration-[3s]">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">
          Privacy Statement
        </h1>
        <div className="flex flex-col justify-center text-center mx-5 lg:mx-28">
          <p>
            Bristol Link is committed to maintaining complete data privacy and anonymity to people who submit their crushes.
            We comply with the Data Protection Act and our site has been stress tested by the Cybersecurity Research
            team in bristol.
            As far as our knowledge goes, your data is completely safe and we are committed to address any data security breaches
            as fast as possible. Include other fancy things to inspire confidence.
          </p>
        </div>
      </div>
    </>
  );
}
