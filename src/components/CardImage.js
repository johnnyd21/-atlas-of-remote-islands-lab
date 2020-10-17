import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
    <div className="card-image" style={{backgroundImage: "url(" + props.image + ")"}}></div>
  );
}

export default CardImage;