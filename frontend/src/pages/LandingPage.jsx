import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function LandingPage() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-white motion-opacity-in-0 motion-duration-[3s] lg:pt-20 lg:overflow-hidden">
        <div className="flex flex-col items-center max-w-md -mt-14 lg:-mt-20">
          <img src="/favicon.png" alt="" className="w-80 lg:w-96 lg:-mt-20" />
          <div className="flex flex-col -mt-14 lg:-mt-24 gap-3">
            <Button
              text="Login"
              backgroundColor="bg-pink-400"
              textColor="text-white"
              path="/login"
            />
            <Button
              text="Register"
              backgroundColor="bg-white"
              textColor="text-black"
              path="/register"
            />
            <Button
              text="What is Link"
              backgroundColor="bg-white"
              textColor="text-black"
              path="/what-is-link"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-gray-400 underline text-md lg:text-sm lg:gap-1 mt-4 font-poppins">
            <Link to={"/privacy-statement"} className="text-center">
              Privacy Statement
            </Link>
            <Link to={"/contact-us"} className="text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
