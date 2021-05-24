import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const MuPagination = (props) => {
  const {listPageNumbers, countCardsInPage, getCards, loading} = props;
  const classes = useStyles();
  const onPageChanged = (pageNumber, countCardsInPage) => {
    getCards(pageNumber, countCardsInPage);
  }

  return (<>
      <div className={classes.root}>
          <Pagination count={listPageNumbers.length}
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

MuPagination.propTypes = {
  listPageNumbers: PropTypes.array.isRequired,
  countCardsInPage: PropTypes.number.isRequired,
  getCards: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default MuPagination;