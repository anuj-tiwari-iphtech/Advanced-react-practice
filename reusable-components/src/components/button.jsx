

export default function Button({
    children,
    onClick,
    variant = "primary",
    disabled = false,
}){


    return(
        <>
        <button
            className= {`btn-${variant}`}
            onClick={onClick}
            disabled = {disabled}
        >
            {children}
        </button>
        </>
    )
}