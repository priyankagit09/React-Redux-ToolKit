import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetails/MovieDetail';
import {Routes, Route} from "react-router-dom"
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
  <div className="container">
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
  <Route element={<PageNotFound/>}/>
  </Routes>
  </div>
     
  
      <Footer/>
    </div>
  );
}

export default App;
