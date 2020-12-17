// import React from 'react'
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav"
import "./Browse.css";


// export default function Browse() {

//     return (
//         <div className="app">
//            <Nav/>

//       <Banner />
//       <Row
//         title="Netflix Originals"
//         fetchURL={requests.fetchNetflixOriginals}
//         isLargeRow
//       />
//       <Row title="Trending Now" fetchURL={requests.fetchTrending} />
//       <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
//       <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
//       <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
//       <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
//       <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />  
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class Browse extends Component {
  render() {
    return (
      
       <div className="app">
           <Nav/>

      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />  
        </div>
    )
  }
}
