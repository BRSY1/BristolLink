import useDocumentTitle from "../hooks/useDocumentTitle";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function ContactUsPage() {
  useDocumentTitle("Contact Us");

  return (
    <>
      <div className="w-full min-h-screen mt-24 bg-white flex flex-col pt-10 px-5 max-w-2xl mx-auto">
        <div className="text-center mb-8 motion-opacity-in-0 motion-duration-[3s]">
          <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">Contact Us</h1>
    
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/bris_link?igsh=MTJneXBlanpuYTZicw=="
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:bristollink2024@gmail.com"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <MdOutlineEmail size={24} />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg shadow-pink-300 p-8 motion-opacity-in-0 motion-duration-[3s]">
          <div className="flex flex-col gap-6 text-center text-gray-700">
            <p className="text-lg">
              We'd love to hear your feedback, questions, concerns and anything
              that would make Bristol Link better.
            </p>

            <div className="flex items-center justify-center gap-2 text-lg">
              <MdOutlineEmail className="text-pink-500" size={20} />
              <a
                href="mailto:bristollink2024@gmail.com"
                className="text-pink-500 hover:underline hover:cursor-pointer font-medium"
              >
                bristollink2024@gmail.com
              </a>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="bg-pink-50 rounded-lg p-6">
              <p className="text-lg font-medium text-pink-600">
                Enjoyed using Link? 🩷
              </p>
              <p className="mt-2">
                Recommend it to your friends! We're always looking for ways to
                make your experience better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
