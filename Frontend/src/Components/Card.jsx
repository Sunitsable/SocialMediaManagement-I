import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import './Card.css'; // Import CSS file for styling

const Card = ({cardname,link,image}) => {
    const navigate=useNavigate();
  return (
    <div className="card" style={{
      height:"20rem",
      display:"flex",
      flexDirection:"column",
      textAlign:"center",
      justifyContent:"center",
    }}>
        <img  src={image} alt="Lago di Braies" style={{ 
          height:"14rem",
          padding:"15px",
          borderRadius:"40px"
        }}></img>


        <div className="card__details">



          <Link to={link} ><button type="submit" style={{color:"black",border: "none",width:"20rem", height:"3rem",borderRadius:"5px"}} >{cardname}</button></Link>  
        </div>


        
   </div> 
  );
};

export default Card;
