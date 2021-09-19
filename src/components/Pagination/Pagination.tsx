import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

type PropsType = {
    countPage: number
    countCardsInPage: number
    getCards: (pageNumber: number, countCardsInPage: number) => void
    loading: boolean
}
const MuPagination: React.FC<PropsType> = ({countPage,
                                           countCardsInPage,
                                           getCards,
                                           loading}) => {
  const classes = useStyles();
  const onPageChanged = (pageNumber: number, countCardsInPage: number) => {
    getCards(pageNumber, countCardsInPage);
  }

  return (<>
      <div className={classes.root}>
          <Pagination count={countPage}
                      disabled={loading}
                      onChange={(event, page) => {
                          if (!loading) {
                              onPageChanged(page, countCardsInPage);
                          }
                      }}
                      showFirstButton
                      showLastButton />
      </div>
  </>);
};

// MuPagination.propTypes = {
//     countPage: PropTypes.number.isRequired,
//   countCardsInPage: PropTypes.number.isRequired,
//   getCards: PropTypes.func.isRequired,
//   loading: PropTypes.bool.isRequired,
// }

export default MuPagination;