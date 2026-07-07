

export default function Input({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
}){

    return(
        <>
            <div>
                {label && <label>{label}</label>}

                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </>
    )
}