export default function Btn({variant = "default", width, children, ...rest}){
    const variants = {
        default : `from-indigo-400 to-violet-300 text-violet-700 shadow-indigo-700/30
                   hover:shadow-indigo-700/50 hover:from-indigo-500 `,
        red : `from-rose-400 to-violet-300 text-rose-700 shadow-rose-700/30 
               hover:shadow-rose-700/50 hover:from-rose-500 `,
        lime : `from-lime-400 to-violet-300 text-lime-700 shadow-lime-700/30
                hover:shadow-lime-700/50 hover:from-lime-500 `,
        yellow : `from-yellow-400 to-violet-300 text-yellow-700 shadow-yellow-700/30
                  hover:shadow-yellow-700/50 hover:from-yellow-500 `
    }
    const style = `bg-gradient-to-br py-2 px-4 rounded-lg shadow-lg text-lg font-bold 
                   transition-transform transition-colors transition-shadow
                   hover:scale-110 active:scale-90 hover:shadow-xl 
                   hover:to-violet-400 hover:text-violet-200 
                   duration-400 ease-in-out
                   ${width || "flex-1"}`
  
    return(
        <button className={`${style} ${variants[variant] || ""}`} {...rest}>
            {children}
        </button>
    )
}