import React from "react";
import {Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }));
  


const Celula = ({ item, index }) => {

    const classes = useStyles();

    return (
            <Grid item className = {classes.root} key={`${item.name}-${index}` }>
                <Grid container direction="column" >
                    <Grid item><Typography>{item.name}</Typography></Grid>
                    <Grid item>
                        <Grid container direction="row" justify= 'space-between' >
                         <Grid item><Typography>{item.artists}</Typography></Grid>
                         <Grid item><Typography>{item.genre}</Typography> </Grid>
                     </Grid> 
                </Grid>
                </Grid>    
            </Grid>
            

                
    );
};


export default Celula;
