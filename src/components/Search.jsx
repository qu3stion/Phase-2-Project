import React, { useState, useEffect } from "react"
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import { apiCall } from '../services/fetchShows'
import TheShow from './TheShow'

function Search() {
  const [searched, setSearched] = useState("")
  let navigate = useNavigate()
  let { name } = useParams()

  const handleClick = (e) => {
    e.preventDefault();
      apiCall(e.target.searchInput.value)
      .then(res => setSearched(res))
  }
console.log(searched);

  return (
    <div className="searchBar">
      <form
      onSubmit={handleClick}
      >
      <input
        className="search-input"
        type="text"
        placeholder="Search your favorite shows..."
        name="searchInput"
      />
      <button
        type="submit"
        className="button"
      >
      Search
      </button>
      </form>
      <div className="grid-container">
      {(searched || []).map((show, index) => {
        return <TheShow show={show.show} key={index}/>
      })}
      </div>
    </div>
  )
}

export default Search
