import React from 'react';
import {Button} from '@material-ui/core'

const Botao = props => {

  const {texto, handleChange} = props;

  console.log('trace texto, handleChange', props)
  return (
  <Button variant="contained" color="primary" onClick={handleChange}>
    {texto}
  </Button>
  );
}

export default Botao;