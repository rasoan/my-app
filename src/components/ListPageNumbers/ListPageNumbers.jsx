import React from "react";
import style from "./ListPageNumbers.module.scss";
import * as axios from "axios";

const ListPageNumbers = (props) => {
  let pagesSize = props.pagesSize;

  let onPageChanged = (pageNumber, pagesSize) => {
    props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pagesSize}`)
         .then(response => {
           props.setUsers(response.data.items);
         });
  }

  let pageNumbers = props
                    .pages
                    .map(pageNumber => {
                      return <li className={style.pageNumberContainer}>
                               <button onClick={() => onPageChanged(pageNumber, pagesSize)} 
                                       className={`${style.button} ${props.currentPage === pageNumber && style.currentPage}`}>
                                 {pageNumber}
                               </button>
                             </li>
                                    }
                                );


  return (<ul className={style.pageNumberListContainer}>{pageNumbers}</ul>);
};

export default ListPageNumbers;
