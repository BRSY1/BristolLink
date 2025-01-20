import Button from "../components/common/Button";

export default function WhatIsLinkPage() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-3xl mt-32 ml-12 text-left font-poppins text-black">
          What Is
          {/* <div className="border border-black mx-auto" /> */}
        </h1>
        {/* <div className="border border-black ml-10 mr-" /> */}
        <img src="/logo.webp" alt="" className="w-80 -mt-20" />
        <div className="border border-neutral-500 ml-7 -mt-20 mr-10 md:mr-72" />
        <p className="font-poppins text-lg ml-7 mr-10 mt-5">
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
        <div className="mx-10 mt-5 text-left">
          <Button
            text="Register now!"
            backgroundColor="bg-pink-400"
            textColor="text-white"
            path="/what-is-link"
          />
        </div>
      </div>
    </>
  );
}
