import React from "react";
import Header from '../../components/header'

const Home=({location: { pathname }})=>{
    
    return(
        <div>
            <Header router={pathname.replace('/','')}/>
        </div>
    )
}

export default Home;