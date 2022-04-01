import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import Error from './components/Error'

function App() {

  return (
  <div className="App">
      <Header />
    <div className="Links">
      <NavLink to={"/"}>Search</NavLink>
    </div>

      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
  </div>
  );
}

export default App;
