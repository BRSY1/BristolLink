import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="w-full min-h-screen font-poppins p-5 lg:pt-20 bg-white flex flex-col justify-center max-w-md mx-auto lg:overflow-hidden">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">
          404: Page Not Found
        </h1>
        <p className="flex flex-col justify-center text-center">
          Looks like you got lost, the page you're looking for doesn't exist
          <Link to={"/"} className="text-pink-500 underline">Take me home.</Link>
        </p>
      </div>
    </>
  )
}