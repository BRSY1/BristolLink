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
    <div className="mt-16 text-center font-poppins p-8 mb-20">
      <h1 className="text-3xl mt-10 font-semibold text-pink-500 mb-5 text-center">
        About Us
      </h1>

      {/* Self-intro */}
      <div className="justify-center items-center gap-12 mb-20">
        <p className="leading-relaxed lg:mx-24">
          We're a group of first year students studying Computer Science at Bristol.
          We were inspired to make Bristol Link after discovering <a className="underline" href="https://www.linkedin.com/in/gandhixyz/">Ishan Gandhi's</a> project
          of the same name. We hope that you have fun using the site, and hopefully find a connection!
          We'd love to hear any feedback you might have for us.
        </p>
        {/* <div className="w-full md:w-3/4 space-y-6">
          <p className="leading-relaxed">
            We're a group of first year students studying Computer Science at Bristol.
            We were inspired to make Bristol Link after finding about <a className="underline" href="https://www.linkedin.com/in/gandhixyz/">Ishan Gandhi's</a> project
            of the same name. We hope that you have fun using the site, and hopefully find a connection!
            We'd love to hear any feedback you might have for us.
          </p>

          <p>Created By: Hrushikesh Emkay, Tom Lam</p>
          <p>Special Thanks to: Ishan Gandhi, Harish Rajkumar, Dr. Matthew Edwards, Dr. Joseph Hallett, Saleh Alsyefi</p>
        </div>  */}
        {/* Team Section */}
        {/* <div className="mt-16 p-8 mb-20">
          <h2 className="text-3xl text-black mb-8 pb-4 border-b border-pink-200">
            Who are we?
          </h2>

          {/* Self-intro */}
        {/* <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
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
              , we built <b>BristolLink</b>, a matchmaking platform launching
              on Valentine's Day 2025. It's a safe, anonymous, and fun way for
              students to connect with potential matches.
            </p>
            <p className="leading-relaxed">
              BristolLink isn't just another dating app—it's designed with
              students in mind, making it easier to form real connections
              while keeping things respectful and private. We had a blast
              building it, and we hope you all love the app!
            </p>
          </div>
        </div> */}

        {/* Core Developers Section */}
        <div className="mb-16 mt-10">
          <h2 className="text-3xl text-black mb-8 text-center">
            The Team
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
  )
}