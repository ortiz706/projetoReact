import React from 'react';
import {  
     Grid,
     Typography     
} from '@material-ui/core';
import {selectTitle} from '../../constants'

const Header =({router})=>{
    console.log('---------------------',router);
    return(
        <Grid>
            <Typography variant='h2'>
                {selectTitle(router)}
            </Typography>
        </Grid>
    )
}

export default Header;