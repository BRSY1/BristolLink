import Button from "../components/common/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import useDocumentTitle from "../hooks/useDocumentTitle";

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
      image: "/favicon.png",
    },
    {
      name: "Tom Lam",
      role: "Lead Developer",
      email: "ye24597@bristol.ac.uk",
      image: "",
    },
    {
      name: "Harish Rajkumar",
      role: "Marketing Lead",
      email: "ye24597@bristol.ac.uk",
      image: "",
    },
  ];

  const additionalTeamMembers = [
    { name: "Someone", role: "Marketing" },
    { name: "Somebody else", role: "Marketing" },
  ];


  return (
    <>
      <div className="mx-5 mt-5 motion-opacity-in-0 motion-duration-[2s]">
        <h1 className="text-3xl mt-40 lg:text-4xl ml-12 text-left text-black motion-preset-typewriter-[7]">
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

        {/* How it Works Section */}
        <div className="mt-16 p-8 mb-20">
          <h2 className="text-3xl text-black mb-8 pb-4 border-b border-pink-200">
            How does it work?
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-xl 
                          bg-gradient-to-r from-neutral-50 to-pink-50 
                          hover:from-neutral-100 hover:to-pink-100 
                          transition-all duration-300 transform hover:scale-102 
                          shadow-pink-100 shadow-md hover:shadow-lg hover:shadow-pink-200"
              >
                <div className="flex-shrink-0 p-4 bg-pink-100 rounded-full shadow-inner">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-medium mb-3 text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-center md:justify-start items-left mx-10 lg:ml-7 mt-8 text-left">
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
              <div 
                key={index}
                className="group relative overflow-hidden flex flex-col items-center p-6 rounded-xl 
                          bg-gradient-to-br from-white to-pink-100 
                          transition-all duration-300 hover:shadow-red-100  
                          hover:shadow-xl hover:to-pink-200"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-pink-200 
                                group-hover:border-pink-300 transition-all 
                                relative z-10">
                  <img 
                    src={dev.image} 
                    alt={dev.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-medium text-neutral-900 mb-2 relative z-10">
                  {dev.name}
                </h3>
                <p className="text-neutral-700 text-center mb-2 relative z-10">
                  {dev.role}
                </p>
                <a 
                  href={`mailto:${dev.email}`}
                  className="mt-2 text-pink-600 hover:text-pink-800 text-sm relative z-10 
                            hover:underline transition-colors duration-300"
                >
                  {dev.email}
                </a>
              </div>
            ))}
          </div>

          {/* Additional Team Members Section */}
          <div>
            <h3 className="text-2xl text-black mb-6 text-center">
              Extended Team
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {additionalTeamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden bg-gray-100
                            p-4 rounded-lg text-center 
                            transition-all duration-300 
                            transform hover:-translate-y-1 
                            hover:shadow-md"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                  
                  <p className="font-medium text-neutral-900 relative z-10">
                    {member.name}
                  </p>
                  <p className="text-sm text-neutral-600 relative z-10">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
