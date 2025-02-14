import TeamMember from "../components/about/TeamMember";
import OtherMember from "../components/about/OtherMember";

export default function AboutUsPage() {
  const coreDevelopers = [
    {
      name: "Hrushikesh Emkay",
      role: "Project Lead",
      email: "fw24131@bristol.ac.uk",
      // github: "https://github.com/rsh-e",
      // image: "/rishi_profile.jpg",
    },
    {
      name: "Tom Lam",
      role: "Lead Developer",
      email: "ye24597@bristol.ac.uk",
      // github: "https://github.com/T0mLam",
      image: "/tom_profile.png",
    },
  ];

  const additionalTeamMembers = [
    { name: "Harish Rajkumar", role: "Marketing Coordinator" },
    {
      name: "Joseph Hallett",
      role: "Data Security Adviser",
      website:
        "https://www.bristol.ac.uk/people/person/Joseph-Hallett-35db48d2-7197-42eb-a402-814e11cc524e/",
    },
    { name: "Josh Jenkins", role: "Logo Designer" },
    {
      name: "Matthew Edwards",
      role: "Data Security Adviser",
      website:
        "https://www.bristol.ac.uk/people/person/Matthew-Edwards-3f509a5b-bc70-486c-b09b-e0f00da4dcc4/",
    },
    { name: "Shubham Kulkarni", role: "Marketing Coordinator" },
  ];

  return (
    <div className="mt-16 flex flex-col text-center font-poppins p-8 mb-20">
      <h1 className="text-3xl mt-10 font-semibold text-pink-500 mb-5 text-center">
        About Us
      </h1>

      {/* Self-intro */}
      <div className="md:flex-row flex justify-center items-center gap-12 mb-20">
        <div className="w-full md:w-3/4 space-y-6">
          <p className="leading-relaxed">
            We're a group of first year students studying Computer Science at Bristol.
            We were inspired to make Bristol Link after finding about <a className="underline" href="https://www.linkedin.com/in/gandhixyz/">Ishan Gandhi's</a> project
            of the same name. We hope that you have fun using the site, and hopefully find a connection!
            We'd love to hear any feedback you might have for us.
          </p>

          <p>Created By: Hrushikesh Emkay, Tom Lam</p>
          <p>Special Thanks to: Ishan Gandhi, Harish Rajkumar, Dr. Matthew Edwards, Dr. Joseph Hallett, Saleh Alsyefi</p>
        </div>
      </div>
    </div>
  )
}