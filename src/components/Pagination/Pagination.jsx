import React, {useState} from "react";
import PropTypes from "prop-types";
import style from "./Pagination.module.scss";

const Pagination = (props) => {
  const {listPageNumbers, countCardsInPage, getCards, loading} = props;

  let loadingStyle = loading ? style.loadingStyle: "";
  let onPageChanged = (pageNumber, countCardsInPage) => {
    setCurrentPageNumber(pageNumber);
    getCards(pageNumber, countCardsInPage);
  }
  const [currentPageNumber, setCurrentPageNumber] = useState(1); // переменная одинаковая X
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

  return (<ul className={`${loadingStyle} ${style.pageNumberListContainer}`}>{pageNumbers}</ul>);
};

PropTypes.propTypes = {
  listPageNumbers: PropTypes.array.isRequired,
  countCardsInPage: PropTypes.number.isRequired,
  getCards: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Pagination;