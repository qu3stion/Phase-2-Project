import { useState, useEffect } from 'react'


export default function TheShow(props) {
  const {show} = props
    console.log(show);
  const {name, genres, image, rating, summary, runtime, url, schedule} = show
    console.log(genres, image, rating, summary);
  const {average} = rating;
  const {days, time} = schedule
    console.log(average);
    console.log(url);


return(
  <div className="showCard">
    <div className='showInfo'>
        <img
          alt={`Poster of ${name}`}
          src={image?.medium}
        />
        <h1 id="weekDay">
          {days[0]}s @ {time}
        </h1>
    </div>
    <div className='showInfo'>
      <h1 id="Name"><a href={url}>{name}</a></h1>
      <h1 id="Genre">Genre: {genres[0]}</h1>
      <h1 id="Avg">Rating: {average}</h1>
      <h1 id="Runtime">{runtime}min Episodes</h1>
      <h1 id="Summary">Summary: {summary}</h1>
    </div>
  </div>
)
}
