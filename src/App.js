import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  console.log(data);
  let island1 = data.islands[0]
  console.log(island1.description);
  
  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Islands</h2>
        <ul className="cards">
          
           {data.islands.map(island => {
               return(<Card name={island.name}   
                description={island.description}
                image={island.image}
                latitude={island.coords.lat}
                longitude={island.coords.lon}/>)

           })}

          <Card name={island1.name}   
                description={island1.description}
                image={island1.image}
                latitude={island1.coords.lat}
                longitude={island1.coords.lon}
            
                 />

                


        </ul>
      </div>
    </div>
  );
}

export default App;
