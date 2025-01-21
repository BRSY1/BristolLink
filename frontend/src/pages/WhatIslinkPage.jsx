import Button from "../components/common/Button";

export default function WhatIsLinkPage() {
  return (
    <>
      <div className="mx-10 mt-5 motion-opacity-in-0 motion-duration-[3s]">
        <h1 className="text-3xl mt-40 lg:mt-24 lg:text-4xl ml-12 text-left font-poppins text-black">
          What Is
          {/* <div className="border border-black mx-auto" /> */}
        </h1>
        {/* <div className="border border-black ml-10 mr-" /> */}
        <img src="/logo.webp" alt="" className="w-80 -mt-20" />
        <div className="border border-neutral-500 ml-7 -mt-20 mr-10 md:mr-72" />
        <p className="font-poppins text-lg lg:text-base ml-7 mr-10 mt-5 lg:mr-16">
        Bristol Link is a project which aims to connect University of Bristol students with their crush, in an easy, anonymous way. <br />
        Developed by UOB students, it lets you shoot your shot in less than 5 minutes, blah blah blah. 
        </p>
        <div className="ml-7">
        <h2 className="text-3xl mt-10 lg text-left font-poppins text-black">
        How does it work?
        </h2>
        <p className="font-poppins text-lg lg:text-base mt-5 mr-10 lg:mr-16">
        Let’s say you have a special someone in mind. Find their UOB email by typing it into Outlook, and put it into Bristol Link. They’ll receive an email from us, telling them that somebody (ahem) wants a date, but they aren’t told your name or information.<br /><br />
        Supposing they are interested, your crush will have to log into Link themselves, and enter an email of their own.<br /><br />
        If the emails (which are encrypted) are a match, you both receive confirmation, and it’s the beginning of your love story.<br /><br />
        Sometimes, it just isn’t meant to be, and if they enter another email instead, you will be notified, and can have another shot at someone new.
        </p>
        </div>

        <div className="flex flex-row justify-start items-left mx-10 lg:ml-7 mt-5 text-left motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-sm motion-duration-[2s] motion-delay-200">
          <Button
            text="Register now!"
            backgroundColor="bg-pink-400"
            textColor="text-white"
            path="/register"
          />
        </div>
      </div>
    </>
  );
}
