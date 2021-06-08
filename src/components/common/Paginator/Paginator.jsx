import React, { useState, useEffect } from 'react'
import s from '../Paginator/Paginator.module.css'

let Paginator = ({totalCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    const [portionNumber, setPortionNumber] = useState(1);
    let pagesCount = Math.ceil(totalCount / pageSize);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

 

    let portionCount = Math.ceil(pagesCount / portionSize);
    let pages = [];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);


}
    
    return <div>

        {portionNumber > 1 && 
        <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
            return <span className={currentPage === p ? s.selectedPage : s.pageNum} onClick={()=> onPageChange(p)}>{p}</span>
        })}

        {portionCount > portionNumber && 
        <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>NEXT</button>}

        </div>
}

export default Paginator










                    