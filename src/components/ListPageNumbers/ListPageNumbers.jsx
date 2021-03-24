import React from "react";
import style from "./ListPageNumbers.module.scss";
import {usersApi} from "../../api/api";

const ListPageNumbers = (props) => {
  let pagesSize = props.pagesSize;
  let isFetchingStyle = props.isFetching ? style.isFetchingStyle: "";
  let onPageChanged = (pageNumber, pagesSize) => {
    props.toggleIsFetching(true);
    props.setCurrentPage(pageNumber);
    usersApi.getUsers(pageNumber, pagesSize)
      .then(response => {
        props.setUsers(response.items);
        props.toggleIsFetching(false);
      });
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
