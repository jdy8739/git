import type { InputHTMLAttributes } from "react";

const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement> & { className?: string }) => {
    return <input
        className={`
            w-full
            h-[3.50rem]
            px-[1.5rem]
            py-[1.25rem]
            rounded-[10px]
            bg-[#f2f4ff]
            placeholder:text-[#979797]
            outline-none
            ${className}`}
        {...props}
        />
}

export default Input;