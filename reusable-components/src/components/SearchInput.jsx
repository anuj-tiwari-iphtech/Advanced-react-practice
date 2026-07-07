

export default function Search({
    value,
    onChange,
    placeholder = "Search..."
}){
    return(
        <input
            type="search"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}