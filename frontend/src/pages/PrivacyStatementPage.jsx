import useDocumentTitle from "../hooks/useDocumentTitle";

export default function PrivacyStatementPage() {
  useDocumentTitle("Privacy Statement");

  return (
    <>
      <div className="font-poppins w-full min-h-screen mt-24 p-10 bg-white flex flex-col mx-auto max-w-6xl lg:overflow-hidden motion-opacity-in-0 motion-duration-[3s]">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">
          Privacy Statement
        </h1>
        <div className="text-center">
          <p>
            Bristol Link is committed to ensuring your data privacy. We comply
            with the Data Protection Act and have partnered with the
            Cybersecurity Research team at Bristol University to test our
            platform's security. Your data is safe with us, and we will act
            swiftly in case of any security issues.
          </p>

          <h2 className="text-xl font-semibold text-pink-400 mt-6 mb-3">
            User Guidelines
          </h2>
          <ul className="list-inside list-disc text-center mx-auto max-w-prose">
            <li>
              <strong>Respect privacy</strong> - keep crushes anonymous until a
              match is made.
            </li>
            <li>
              <strong>Be respectful</strong> - harassment will result in
              suspension.
            </li>
            <li>
              <strong>Report issues</strong> - contact us if you encounter
              problems.
            </li>
          </ul>

          <p className="mt-6">
            By using Bristol Link, you agree to follow these rules and our data
            privacy practices. Thank you for helping us create a safe and
            enjoyable platform!
          </p>
        </div>
      </div>
    </>
  );
}
