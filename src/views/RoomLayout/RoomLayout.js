import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { RoomLayoutToolbar, RoomLayoutTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const RoomLayout = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <RoomLayoutToolbar />
      <div className={classes.content}>
        <RoomLayoutTable users={users} />
      </div>
    </div>
  );
};

export default RoomLayout;
