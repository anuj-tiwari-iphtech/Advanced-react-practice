

export default function Modal({
    isOpen,
    onClosed,
    children,
}){
    if(!isOpen) return null

    return(
        <>
            <div className="Modal">
                <div className="context">
                    {children} {" "}
                    <button onClick={onClosed}>Close</button>

                </div>

            </div>
        </>
    )

}