export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `relative rounded-md m-4 text-white text-center p-2 px-4 bg-[#2470c6]  transition-all duration-500
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#2470c6] before:transition-all
                before:duration-300 before:opacity-20 before:hover:opacity-0 before:hover:scale-50
                after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                after:border after:border-[#1feffe] after:scale-125 after:hover:opacity-100 after:hover:scale-100 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
