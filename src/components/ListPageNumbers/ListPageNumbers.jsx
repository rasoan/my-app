import React from "react";
import style from "./ListPageNumbers.module.scss";

const ListPageNumbers = (props) => {
  let pagesSize = props.pagesSize;
  let isFetchingStyle = props.isFetching ? style.isFetchingStyle: "";
  let onPageChanged = (pageNumber, pagesSize) => {
    props.setCurrentPage(pageNumber);
    props.getUsers(pageNumber, pagesSize);
  }

  let pageNumbers = props
                    .pages
                    .map(pageNumber => {
                      return <li className={style.pageNumberContainer}>
                               <button onClick={() => {
                                                       if (!props.isFetching) onPageChanged(pageNumber, pagesSize)
                                                      }
                                               } 
                                       className={`${style.button} ${props.currentPage === pageNumber && style.currentPage}`}
                                       disabled={props.isFetching}>
                                 {pageNumber}
                               </button>
                             </li>
                                    }
                                );


  return (<ul className={`${isFetchingStyle} ${style.pageNumberListContainer}`}>{pageNumbers}</ul>);
};

export default ListPageNumbers;
