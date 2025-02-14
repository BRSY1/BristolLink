import useDocumentTitle from "../hooks/useDocumentTitle";

function PrivacyStatementPage() {
  useDocumentTitle("Privacy Statement");

  return (
    <>
      <div className="font-poppins w-full min-h-screen mt-24 mb-24 p-10 flex flex-col mx-auto max-w-6xl lg:overflow-hidden motion-opacity-in-0 motion-duration-[3s]">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">
          Privacy Statement
        </h1>

        <div className="text-center space-y-8">
          <section>
            <p className="mb-4">
              Bristol Link is committed to ensuring your data privacy. We comply
              with the Data Protection Act and have consulted with lecturers from the
              Cybersecurity Research Group at Bristol University to advice on our
              platform's security. Your data is safe with us, and we will act
              swiftly in case of any security issues.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-pink-400 mb-3">
              Data We Collect
            </h2>
            <p className="mb-4">
              We collect and process the following information to provide our
              services:
            </p>
            <ul className="list-inside list-disc text-sm text-center mx-auto max-w-prose space-y-2">
              <li>Basic profile information (name, university email)</li>
              <li>Name and email of your crush </li>
              <li>Message to your crush</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-pink-400 mb-3">
              How We Use Your Data
            </h2>
            <p className="mb-4">Your information is used exclusively for:</p>
            <ul className="list-inside text-sm list-disc text-center mx-auto max-w-prose space-y-2">
              <li>Matching you with mutual connections</li>
              <li>Verifying university affiliation</li>
              <li>Platform security and fraud prevention</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-pink-400 mb-3">
              Your Rights
            </h2>
            <p className="mb-4">
              Under data protection law, you have the right to:
            </p>
            <ul className="list-inside text-sm list-disc text-center mx-auto max-w-prose space-y-2">
              <li>Request a copy of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-pink-400 mb-3">
              User Guidelines
            </h2>
            <ul className="list-inside text-sm list-disc text-center mx-auto max-w-prose space-y-2">
              <li>
                <strong>Respect privacy</strong> - keep crushes anonymous until
                a match is made
              </li>
              <li>
                <strong>Be respectful</strong> - harassment will result in
                suspension
              </li>
              <li>
                <strong>Report issues</strong> - contact us if you encounter
                problems
              </li>
              <li>
                <strong>Verify identity</strong> - use your university email for
                registration
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-pink-400 mb-3">
              Data Security
            </h2>
            <p className="mb-4">We protect your data through:</p>
            <ul className="list-inside text-sm list-disc text-center mx-auto max-w-prose space-y-2">
              <li>Data encryption for messages</li>
              <li>Secure data storage with regular backups</li>
              <li>Limited member data access</li>
            </ul>
          </section>

          <section>
            <p className="mt-6">
              By using Bristol Link, you agree to follow these rules and our
              data privacy practices. For any privacy-related queries or to
              exercise your data rights, please us at admin@bristollink.uk.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default PrivacyStatementPage;
