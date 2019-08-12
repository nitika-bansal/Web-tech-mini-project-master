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

const RoomLayoutToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
      <Button
          color="primary"
          variant="contained"
        >
          Delete Selected
        </Button>
        <span className={classes.deleteButton}/>
        <Button
          color="primary"
          variant="contained"
        >
          + Add Room Layout
        </Button>
        <span className={classes.spacer}/>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

RoomLayoutToolbar.propTypes = {
  className: PropTypes.string
};

export default RoomLayoutToolbar;
