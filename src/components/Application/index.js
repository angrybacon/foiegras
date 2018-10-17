import React from 'react';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from '../Header';

const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  root: {height: '100%'},
});

class Application extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} direction="column" wrap="nowrap">
        <Grid item><Header component="header" /></Grid>
        <Grid item className={classes.body}></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Application);
