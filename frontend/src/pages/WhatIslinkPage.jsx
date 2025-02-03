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
  ];

  const additionalTeamMembers = [
    { name: "Harish Rajkumar", role: "Marketing Coordinator" },
    { name: "Joseph Hallett", role: "Data Security Adviser" },
    { name: "Josh Jenkins", role: "Logo Designer" },
    { name: "Matthew Edwards", role: "Data Security Adviser" },
    { name: "Shubham Kulkarni", role: "Marketing Coordinator" },
  ];

  return (
    <>
      <div className="font-poppins mx-3 mt-5 motion-opacity-in-0 motion-duration-[2s]">
        <h1 className="text-3xl mt-40 lg:text-4xl ml-12 text-left text-black font-semibold font-poppins">
          What Is
          {/* <div className="border border-black mx-auto" /> */}
        </h1>
        {/* <div className="border border-black ml-10 mr-" /> */}
        <img src="/logo.webp" alt="" className="w-80 -mt-20" />
        <div className="border border-neutral-500 ml-7 -mt-20 mr-10 md:mr-72" />
        <p className=" text-lg lg:text-base ml-7 mr-10 mt-5 lg:mr-16">
          <b>
            BristolL<span className="text-pink-500">i</span>nk
          </b>{" "}
          is a fun and easy way for University of Bristol students to connect
          with their crushes, all while staying anonymous. Developed by UOB
          students for UOB students, it allows you to shoot your shot in less
          than 5 minutes. Simply sign up with your university email, drop the
          name of your crush, and see if there's a match — no awkwardness, just
          a chance to connect!
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

          {/* Self-intro */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/4 flex justify-center items-center min-h-full">
              <a
                href="https://github.com/BRSY1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/brsy1.png"
                  alt="Bristol Link Team"
                  className="w-40 h-40 rounded-xl shadow-xl object-cover transition-all duration-1000 hover:shadow-2xl hover:shadow-pink-400 hover:scale-110"
                />
              </a>
            </div>
            <div className="w-full md:w-3/4 space-y-6">
              <p className="leading-relaxed">
                We're a passionate group of first-year computer science students
                at the University of Bristol who just want to make meeting
                people on campus easier.
              </p>
              <p className="leading-relaxed">
                It all started when we realized how awkward it can be to show
                interest in someone from a distance. So, we built{" "}
                <b>BristolLink</b>, a matchmaking platform launching on
                Valentine's Day 2025. It's a safe, anonymous, and fun way for
                students to connect with potential matches.
              </p>
              <p className="leading-relaxed">
                BristolLink isn't just another dating app—it's designed with
                students in mind, making it easier to form real connections
                while keeping things respectful and private. We had a blast
                building it, and we hope you all love the app!
              </p>
            </div>
          </div>

          {/* Core Developers Section */}
          <div className="mb-16">
            <h2 className="text-3xl text-black mb-8 text-center">
              Core Developers
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-6 ">
              {coreDevelopers.map((dev, index) => (
                <TeamMember key={index} {...dev} />
              ))}
            </div>
          </div>

          {/* Additional Team Members Section */}
          <div>
            <h3 className="text-2xl text-black mb-6 text-center">
              Special Thanks To
            </h3>
            <div className="flex flex-row flex-wrap justify-center items-center gap-3">
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
