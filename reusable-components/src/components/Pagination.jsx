

export default function Pagination({
    currentPage,
    totalPage,
    onChangePage,
}){

    return(
        <div>
            {Array.from({length:totalPage}, (_, i) => (
                <button 
                    key={i}
                    disabled={currentPage === i+1}
                    onClick={() => onChangePage(i+1)}
                >
                    {i+1}
                </button>
            ) )}
        </div>
    )

}