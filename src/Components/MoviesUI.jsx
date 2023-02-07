import React from "react";
import {useRef, useEffect, useState,useContext} from "react";
import superman from "../images/Movies/pngwing 4.png"
import batman from "../images/Movies/pngwing 8.png"
import hulk from "../images/Movies/pngwing 9.png"
import spiderman from "../images/Movies/pngwing 6.png"
import { TfiHandDrag } from "react-icons/tfi";
import { motion } from "framer-motion"
import '../index.css'


  function MoviesUI(props){
    const carouselRef = useRef();
    const [width,setWidth] = useState(0)
    useEffect( () => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[] )

    
    return(
        <div className="container" >
            <div className="first-page">   
            
               <div className="contain">
               <nav>
                    <ul className="navbar" >
                        <li className="li-nav" >Main</li>
                        <li className="li-nav" >Cartoons</li>
                        <li className="li-nav" >Series</li>
                        <li className="li-nav" >Cinema</li>
                        <li className="li-nav" >Tariffs</li>
                    </ul>      
                </nav>
                <img className="hero-batman" src= {batman}/>
                <img className="hero-superman" src= {superman}/>
                <img className="hero-hulk" src= {hulk}/>
                <img className="hero-spiderman" src= {spiderman}/>
                <h1 className="title" >Without any obstacles</h1>
                <h3 className="under-title" >Watch your favorite movies without the Internet by <br /> downloading them for free.</h3>
                <a href= 'https://www.netflix.com/dz-en/'>
                <button className="watch-btn"  >Watch Movies</button>   
                </a>
                <motion.div  ref={carouselRef} className="carousel">
               <motion.div
                   drag="x"
                   dragConstraints= { {right:0, left: -1000} }
                   className="inner-carousel">
                      {props.images.map( (item,index) => (
                <motion.div className="item" key={index}>
                 {  <img src = {` https://image.tmdb.org/t/p/w300${item.slider}`}/>}  
                </motion.div>            
            ) )}
             </motion.div> 
       </motion.div>
       <h1 className="drag-text" > <TfiHandDrag /> Hold To Drag</h1>
       <h1 className="text-under-slider">streaming service that offers a wide variety of award-winning TV shows, movies, 
        anime, documentaries, and more on thousands of internet-connected devices.</h1>

           </div>         
         </div>
        </div>
    )}

export default MoviesUI