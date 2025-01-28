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
      <div className="mx-3 mt-5 motion-opacity-in-0 motion-duration-[2s]">
        <h1 className="text-3xl mt-40 lg:text-4xl ml-12 text-left text-black font-semibold font-poppins">
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
        {/*
        <div className="ml-7">
          <h2 className="text-3xl mt-10 lg text-left text-black">
            How does it work?
          </h2>
          <p className="text-lg lg:text-base mt-5 mr-10 lg:mr-16">
            Let’s say you have a special someone in mind. Find their UOB email
            by typing it into Outlook, and put it into Bristol Link. They’ll
            receive an email from us, telling them that somebody (ahem) wants a
            date, but they aren’t told your name or information.
            <br />
            <br />
            Supposing they are interested, your crush will have to log into Link
            themselves, and enter an email of their own.
            <br />
            <br />
            If the emails (which are encrypted) are a match, you both receive
            confirmation, and it’s the beginning of your love story.
            <br />
            <br />
            Sometimes, it just isn’t meant to be, and if they enter another
            email instead, you will be notified, and can have another shot at
            someone new.
          </p>
        </div>
         */}

        {/* How it Works Section */}
        <div className="mt-16 p-8 mb-20">
          <h2 className="text-3xl text-black mb-8 pb-4 border-b border-pink-200">
            How does it work?
          </h2>

          <div className="space-y-8">
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
        <div className="mt-16 p-8 bg-white mb-20">
          <h2 className="text-3xl text-black mb-8 pb-4 border-b border-pink-200">
            Who are we?
          </h2>

          {/* Core Developers Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {coreDevelopers.map((dev, index) => (
              <TeamMember key={index} {...dev} />
            ))}
          </div>

          {/* Additional Team Members Section */}
          <div>
            <h3 className="text-2xl text-black mb-6 text-center">
              Special Thanks To
            </h3>
            <div className="flex justify-center gap-4 mx-auto">
              {additionalTeamMembers.map((member, index) => (
                <OtherMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
