import React from "react"
import MoviesUI from "./Components/MoviesUI.jsx"
import CardMovies from "./Components/cards-movies.jsx";

function App() {

  const [moviesData, setMoviesData] = React.useState([])
  const [data,setData] = React.useState([])

  React.useEffect(function() {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=a534dbf58bcd8b52ad9fd4ef9f3678e8")
    .then(res => res.json())
    .then((data) => { 
      setData(data.results.map((poster) =>{
        return {
          slider: poster.poster_path
        }
      }))
      setMoviesData(
      data.results.map((object) => {
        return{
          id: object.id,
          title: object.title,
          title2: object.name,
          releaseDate: object.first_air_date,
          releaseDate2:object.release_date,
          image: object.poster_path,
          language: object.original_language,
          overview: object.overview,
        }
      })
    )})
},[])
  
  console.log(moviesData)
  
      // return only 7 images from poster_path //
      const allPosters = Math.ceil(data.length / 3);   
      const fewPosters = data.slice(0,allPosters);
   
    
  return (
    <div className="App">
            <MoviesUI
            images = {fewPosters}/>
            <div className="second-page">
            <h1 className="trending-title" ><b> Trending: </b> </h1>
            <div className="line"> </div>
            <CardMovies data = {moviesData}/>
            <div className="line2"></div>
            <h2 className="about-us">Streaming movie platforms are online services that allow users to watch movies 
            and TV shows on their devices without downloading the content. Some popular platforms include Netflix,
             Amazon Prime Video, Disney+, and Hulu. They offer a wide selection of content, ranging from new releases 
             to classic films and TV series, for a monthly subscription fee. The quality of streaming varies depending 
             on the platform and the user's internet connection. 
            Streaming movies has become increasingly popular due to the convenience and accessibility it provides.</h2>
         </div>        
    </div>
  )
}  

export default App
