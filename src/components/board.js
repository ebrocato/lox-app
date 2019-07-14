import React from 'react';
import Genre from './articleGenre';
import './board.css';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleGenres: [
        {
          genre: ['Weather', 'Politics', 'Culture']
        },
      ]
    }
  }


  render() {
    // const genreList = this.state.articleGenres.map(genreObject => 
    //   <li className="article-genre">
    //     <Genre {...genreObject} />
    //   </li>)



    return(
      <>
        <div className="header-parent">
   
          <div className="header-links">
            <h1 className="header">lox</h1>
            <div className="header-child">BUBBLES</div>
            <div className="header-child">HOT TROPICS</div>
            <div className="header-child">WHALE TALES</div>
            <div className="header-child">THE PLASTIC PROBLEM</div>
          </div>
          <div className="header-content">
            
          </div>
        </div>
        <section className="hero-section">
     
          <h2 className="hero fancy"><span>Premier Fish News</span></h2>
          
        </section>
        <ul>
          {/* {genreList} */}
          <Genre genre={this.state.articleGenres[0].genre}/>
       
         
        </ul>
        
        
      </>
 
    )
  }
}