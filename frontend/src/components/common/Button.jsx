import { Link } from "react-router-dom"

export default function Button({ text, backgroundColor, textColor, path }) {
    return (
        <Link to={path} className={`px-24 py-2 text-xl flex justify-center font-poppins rounded-lg shadow-md border-2 border-pink-400 transition-transform duration-200 hover:scale-105 lg:py-1 lg:text-lg  ${backgroundColor} ${textColor}`}>
            {text}
        </Link>
    )
}
