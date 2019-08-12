import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  deleteButton: {
    marginRight: theme.spacing(1)
  }
}));

const BookingsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
        >
          + Add Booking
        </Button>
      </div>
      <div className={classes.row}>
        <Button
          color="primary"
          variant="contained"
        >
          Delete Selected
        </Button>
        <span className={classes.deleteButton} />
        <SearchInput
          className={classes.searchInput}
          placeholder="Search"
        />
        <span className={classes.spacer} />
        <Button>All</Button>
        <Button>Confirmed</Button>
        <Button>Pending</Button>
        <Button>Cancelled</Button>
      </div>
    </div>
  );
};

BookingsToolbar.propTypes = {
  className: PropTypes.string
};

export default BookingsToolbar;
