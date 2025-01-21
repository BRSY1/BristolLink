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
          Bristol Link is a website which helps connect mutual crushes in Bristol University. <br />
          How does it work? Let's say you have a crush on someone. You put down their bristol uni email address
          (the one ending with @bristol.ac.uk). They'll get an email from us which says someone has a crush on them.
          It won't say who, so they'll have to join the website and put down the email of their crush. If they put
          down your name, then both get an email saying it's a match and it's the beginning of your love story.
          If they put down someone else's name, then you get an email saying that they're interested in someone else,
          and they won't know that you put down their name. You would have shooted your shot anonymously and got some
          closure. <br />
          If your crush isn't interested in you, we'll keep giving you tries until you get a match.
        </p>
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
