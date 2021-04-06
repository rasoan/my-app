import React from "react";
import style from "./Pagination.module.scss";

const Pagination = ({listPageNumbers, currentPageNumber, setCurrentPage, countCardsInPage, getCards, loading}) => {
  let isFetchingStyle = loading ? style.isFetchingStyle: "";
  let onPageChanged = (pageNumber, countCardsInPage) => {
    setCurrentPage(pageNumber);
    getCards(pageNumber, countCardsInPage);
  }

  let pageNumbers = listPageNumbers
                    .map(pageNumber => {
                      return <li className={style.pageNumberContainer}>
                               <button onClick={() => {
                                                       if (!loading) onPageChanged(pageNumber, countCardsInPage)
                                                      }
                                               } 
                                       className={`${style.button} ${currentPageNumber === pageNumber && style.currentPage}`}
                                       disabled={loading}>
                                 {pageNumber}
                               </button>
                             </li>
                                    }
                                );


  return (<ul className={`${isFetchingStyle} ${style.pageNumberListContainer}`}>{pageNumbers}</ul>);
};

export default Pagination;
