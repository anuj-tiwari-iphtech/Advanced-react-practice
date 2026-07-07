

export default function Avatar({
    src,
    alt,
    size=50,
}){
    return(
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            style={{borderRadius:"50%"}}
    />
    )
}