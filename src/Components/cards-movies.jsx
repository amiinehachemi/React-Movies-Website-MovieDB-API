
export default function CardMovies(props){

 

    return(
        <div className="cards-container">
            {props.data.map((item,index) => (
                <div className="cards-contain" key = {index} > 
                <img className="card-img" src= {`https://image.tmdb.org/t/p/w500${item.image}`} alt="image"/>
                <button>suii</button>
                <div className="card-body">
                  <h1 className="Date"> <b>  Release Date : </b> {item.releaseDate} {item.releaseDate2} </h1>
                  <p className="Language" > <b> Language: {item.language} </b></p>
                  <p className="overview" > <b>Overview: </b> {item.overview}</p>
                </div>
                </div>
            )) 
            }
        
        
       </div>

    )
}