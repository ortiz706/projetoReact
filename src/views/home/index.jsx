import React, {useState, useEffect} from "react";
import Header from '../../components/header'
import HomeMananger from './homeMananger'
import {Grid, Typography, TextField} from '@material-ui/core'
import Table from '../../components/table'
import Celula from "../../components/celula";
import {filterByText} from "../../utilities/filter"


const Home=({location: { pathname }})=>{
    
    const [musicasBase, setBaseMusicas]= useState([]);
    const [busca, setBusca] = useState("");
    const [musicasFiltradas, setMusicasFiltradas] = useState([]);

    useEffect(()=>{
        async function listarMusicas(){
           const { musicas } = await HomeMananger.listarMusicas();
           setBaseMusicas(musicas);
        }

         listarMusicas()
    },[])

    useEffect(()=>{
        setMusicasFiltradas(filterByText(["name", "artists", "genre"], musicasBase, busca))
    },[busca, musicasBase])
    
    
    console.log('trace musicas:', musicasBase);
    return(
       <Grid container direction="column"> 
            <Grid >
                <Header router={pathname.replace('/','')}/>
            </Grid>
            <Grid>
                <Grid container direction="column">
                <TextField
              onChange = {event=>setBusca(event.target.value)}
              label = "Busca"
            />
                    <Table rows={musicasFiltradas.map((item, index) => (<Celula
                     item={item}
                     index={index}
                     />))} >

                    </Table>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;