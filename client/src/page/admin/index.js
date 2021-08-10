import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableCompetition from './showCompete/table';
import styles from './styles'
import { withStyles } from '@material-ui/core';
import AppBar from '../../layouts/admin/appBar'



function Admin(props) {
  const {classes} = props

  return (
    
    <div className={classes.root}>
    
      <AppBar/>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
      <h1>test</h1>

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
           
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TableCompetition />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default withStyles(styles)(Admin)