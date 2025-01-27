import Button from "../components/common/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TeamMember from "../components/about/TeamMember";
import OtherMember from "../components/about/OtherMember";
import Step from "../components/about/Step";

export default function WhatIsLinkPage() {
  useDocumentTitle("What is Link");

  const steps = [
    {
      icon: <IoMailOutline className="w-8 h-8" />,
      title: "Enter Their Email",
      description:
        "Find their UoB email through Outlook and submit it through Bristol Link. They'll receive an anonymous notification that someone is interested.",
    },
    {
      icon: <IoLockClosedOutline className="w-8 h-8" />,
      title: "Wait for Their Response",
      description:
        "If they're interested, they'll log into Bristol Link and enter an email address of their own choice.",
    },
    {
      icon: <IoMdHeartEmpty className="w-8 h-8" />,
      title: "Check for a Match",
      description:
        "If the emails match, you both receive confirmation and can start your story. If not, you'll be notified and can try with someone new.",
    },
  ];

  const coreDevelopers = [
    {
      name: "Hrushikesh Emkey",
      role: "Project Lead",
      email: "hrushikesh@bristollink.com",
      github: "https://github.com/T0mLam",
      image: "/favicon.png",
    },
    {
      name: "Tom Lam",
      role: "Lead Developer",
      email: "ye24597@bristol.ac.uk",
      github: "https://github.com/T0mLam",
      image: "",
    },
    {
      name: "Harish Rajkumar",
      role: "Marketing Lead",
      email: "ye24597@bristol.ac.uk",
      github: "https://github.com/T0mLam",
      image: "",
    },
  ];

  const additionalTeamMembers = [
    { name: "Someone", role: "Marketing" },
    { name: "Somebody else", role: "Marketing" },
  ];

  return (
    <>
      <div className="mx-3 mt-5 font-poppins motion-opacity-in-0 motion-duration-[2s]">
        <h1 className="text-3xl mt-24 lg:text-4xl ml-12 text-left text-black">
          What Is
          {/* <div className="border border-black mx-auto" /> */}
        </h1>
        {/* <div className="border border-black ml-10 mr-" /> */}
        <img src="/logo.webp" alt="" className="w-80 -mt-20" />
        <div className="border border-neutral-500 ml-7 -mt-20 mr-10 md:mr-72" />
        <p className=" text-lg lg:text-base ml-7 mr-10 mt-5 lg:mr-16">
          Bristol Link is a project which aims to connect University of Bristol
          students with their crush, in an easy, anonymous way. <br />
          Developed by UOB students, it lets you shoot your shot in less than 5
          minutes, blah blah blah.
        </p>

        {/* How it Works Section */}
        <div className="p-8 mb-20">
          <h2 className="text-3xl text-black mb-8 pb-4 border-b border-pink-200">
            How does it work?
          </h2>

          <div className="space-x-8 flex flex-row">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
          <div className="flex flex-row justify-center md:justify-start items-left mx-10 lg:ml-7 mt-8 text-left whitespace-nowrap">
            <Button
              text="Register now!"
              backgroundColor="bg-pink-400"
              textColor="text-white"
              path="/register"
            />
          </div>
        </div>

        {/* Team Section */}
      </div>
    </>
  );
}
