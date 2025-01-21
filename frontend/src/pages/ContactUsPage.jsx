
export default function ContactUsPage() {
  return (
    <>
      <div className="w-full min-h-screen font-poppins p-5 lg:pt-20 bg-white flex flex-col justify-center max-w-md mx-auto lg:overflow-hidden motion-opacity-in-0 motion-duration-[3s]">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">
          Contact Us
        </h1>
        <div className="flex flex-col justify-center text-center">
          <p>
            We'd love to hear your feedback, questions, concerns and anything that would make Bristol Link better.</p>
          <p>Shoot us an email at <a href="mailto:emkayhrushikesh@gmail.com" className="text-pink-500 hover:underline hover:cursor-pointer">link@email.com</a> and we'll get back to you as soon we can.</p>

          <p className="mt-10">Enjoyed using Link? Recommend it to your friend! What can we do to make your experience better?</p>
        </div>
      </div>
    </>
  );
}
