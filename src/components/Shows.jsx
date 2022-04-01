import React, { useState, useEffect } from "react";
import TheShow from './TheShow'

function Shows(props) {
  const [shows, setShows] = useState([])
  console.log(props);

  return (
    <div>
      {(shows || []).map((show, index) => {
        return <TheShow show={show.show} key={index}/>
      })}
      </div>
  );
};


export default Shows;

// <div className="show">
//   <h2>{show.name}</h2>
//   <div>
//     <img
//       width="200"
//       alt={`Poster of ${show.name}`}
//       src={show.image}
//     />
//   </div>
//
//   <div className='information'>
//     <p>Synosis: {show.summary}</p>
//     <p>Genre: {show.genres}</p>
//     <p>Runtime: {show.runtime}</p>
//     <p>Premier Date: {show.premier}</p>
//     <p>Finale Date: {show.ended}</p>
//     <p>Hyperlink: {show.url}</p>
//   </div>
// </div>
