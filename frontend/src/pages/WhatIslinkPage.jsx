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
      email: "fw24131@bristol.ac.uk",
      linkedin: "https://www.linkedin.com/in/rsh-e",
      image: "/rishi_profile.jpg",
    },
    {
      name: "Tom Lam",
      role: "Lead Developer",
      email: "ye24597@bristol.ac.uk",
      github: "https://github.com/T0mLam",
      linkedin: "https://www.linkedin.com/in/tom-kh-lam",
      image: "/tom_profile.png",
    },
  ];

  const additionalTeamMembers = [
    {
      name: "Harish Rajkumar",
      role: "Marketing Coordinator",
      github: "https://github.com/hrsh9486",
    },
    {
      name: "Joseph Hallett",
      role: "Data Security Adviser",
      website:
        "https://www.bristol.ac.uk/people/person/Joseph-Hallett-35db48d2-7197-42eb-a402-814e11cc524e/",
    },
    {
      name: "Josh Jenkins",
      role: "Logo Designer",
      github: "https://github.com/joshjkns",
    },
    {
      name: "Matthew Edwards",
      role: "Data Security Adviser",
      website:
        "https://www.bristol.ac.uk/people/person/Matthew-Edwards-3f509a5b-bc70-486c-b09b-e0f00da4dcc4/",
    },
    {
      name: "Saleh Alsyefi",
      role: "Data Security Adviser",
      website:
        "https://www.bristol.ac.uk/people/person/Saleh-Alsyefi-86769b5d-297d-4b56-8a2a-7ff80cf008ac/",
    },
    {
      name: "Shubham Kulkarni",
      role: "Marketing Coordinator",
      github: "https://github.com/kshubham-108",
    },
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
        <div className="mt-16 p-8 mb-20">
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
                at the University of Bristol.
              </p>
              <p className="leading-relaxed">
                It all started when we realized how awkward it can be to show
                interest in someone from a distance. Inspire by{" "}
                <a
                  href="https://stanforddaily.com/2020/08/07/new-stanford-link-website-connects-students-with-mutual-crushes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 font-bold"
                >
                  Link
                </a>
                , a student initiative developed by{" "}
                <a
                  href="https://www.linkedin.com/in/gandhixyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 font-bold"
                >
                  Ishan Gandhi
                </a>
                , we built <b>BristolLink</b>, a matchmaking platform launching
                on Valentine's Day 2025. It's a safe, anonymous, and fun way for
                students to connect with potential matches.
              </p>
              <p className="leading-relaxed">
                We hope that you have fun using the site, and hopefully find a
                connection! We'd love to hear any feedback you might have for
                us.
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