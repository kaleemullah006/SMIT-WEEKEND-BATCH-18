export default function Buttons({text, color, size}){


    const sizes = {
        sm:"px-2 py-1 text-sm",
        md:"px-4 py-2 text-base",
        lg:"px-6 py-3 text-lg"
    }

    return(
        <>
        <button className={`${color} ${sizes[size]} text-white rounded-lg transition duration-300 hover:-translate-y-1 hover:font-bold hover:opacity-80 bg-blue-500`}>{text}</button>
        
        
        
        </>
    )
}