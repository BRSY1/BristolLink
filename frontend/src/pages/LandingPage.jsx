import Button from "../components/common/Button";

export default function LandingPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center max-w-md -mt-14 lg:-mt-20">
                <img src="../../public/favicon.png" alt="" className="w-80 lg:w-96 lg:-mt-20" />
                <div className="flex flex-col -mt-14 lg:-mt-24 gap-3">
                    <Button text="Login" backgroundColor="bg-pink-400" textColor="text-white" path="/login" />
                    <Button text="Register" backgroundColor="bg-white" textColor="text-black" path="/register" />
                    <Button text="What is Link" backgroundColor="bg-white" textColor="text-black" path="/what-is-link" />
                </div>

            </div>
        </div>
    )
}
