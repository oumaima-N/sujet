import React from 'react';
import '../App.css'
import {useLocation} from "react-router-dom";

function Home(){

    const location=useLocation()


   return (
       <div className="home">
             {/* // afficher le nom de utilisateur */}
            <h1>Hello {location.state.id} and welcome to the home</h1>

       </div>
   )


}
export default Home;
