import React from 'react'
import s from '../Paginator/Paginator.module.css'

let Paginator = ({totalCount, pageSize, currentPage, onPageChange}) => {
    let pageCount = Math.ceil(totalCount/pageSize);
    let pages = [];

    for(let i=1; i<=pageCount; i++){
    pages.push(i)
}
    
    return <div>

        {pages.map(p => {
            return <span key={p.id} className={currentPage === p ? s.selectedPage : s.pageNum} onClick={(e)=> onPageChange(p)}>{p}</span>
        })}

        </div>
}

export default Paginator






                    