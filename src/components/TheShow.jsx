import { useState, useEffect } from 'react'


export default function TheShow(props) {
  const {show} = props
    console.log(show);
  const {name, genres, image, rating, summary, runtime} = show
  const {average} = rating;
  console.log(image.medium);


return(
  <div className="showCard">
    <div className='showInfo'>
        <img
          alt={`Poster of ${name}`}
          src={image.medium}
        />
    </div>
    <div className='showInfo'>
      <h1 id="Name">{name}</h1>
      <h1 id="Genre">Genre: {genres[0]}</h1>
      <h1 id="Avg">Rating: {average}</h1>
      <h1 id="Summary">{summary}</h1>
    </div>
  </div>
)
}
