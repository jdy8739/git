const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <button
        className={
            `px-[23px]
            py-[10px]
            rounded-[10px]
            bg-[#4762FF]
            text-white
            font-semibold
            cursor-pointer
            ${className}`}
        >{children}</button>
}

export default Button