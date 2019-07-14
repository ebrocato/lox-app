import React from 'react';
import './articleGenre.css';
import ocean from './ocean.jpg';
import coral from './fish-coral.jpg';
import woman from './women-fish.jpg';




export default class Genre extends React.Component {
  
  constructor(props) {
    // console.log(props.genre[0])
    super(props);
    this.state = {
      articles: [
        {
          weatherArticleTitle: 'Todays Forcast: Everyting is still wet',
          weatherArticleBody: 'But please continue to avoid plastic straws',
        },
        {
          politicsArticleTitle: 'Korrupt Koi ',
          politicsArticleBody: 'Tell-all exposing Senator Pam Clam and her mission to take down the SeaOP',
        },
        {
          cultureArticleTitle: 'Typoon Poon: what you need to know about carp STDs and how to prevent them ',
          cultureArticleBody: 'An alarming number of carp teens are unaware of a new strain of STDs',
        }         
      ]
    }  
  }

  render() {
    const weatherArticle = this.state.articles.map(article => article.weatherArticleTitle ? <div className="outer-title-para"><li className="article-title ">{article.weatherArticleTitle}</li><p className="paragraph outer-paragraph">{article.weatherArticleBody}</p></div> : '')
    const politcsArticle = this.state.articles.map(article => article.politicsArticleTitle ? <div className="inner-title-para"><li className="article-title middle-title">{article.politicsArticleTitle}</li><p className="paragraph inner-paragraph">{article.politicsArticleBody}</p></div> : '')
    const cultureArticle = this.state.articles.map(article => article.cultureArticleTitle ? <div className="outer-title-para"><li className="article-title">{article.cultureArticleTitle}</li><p className="paragraph outer-paragraph">{article.cultureArticleBody}</p></div> : '')
    return(
    
      <section className="parent-articles">
        <div className="children-articles first-article">
          <img src={ocean} alt="ocean with fish"></img>
          <h3 className="outside-genre">{this.props.genre[0]}</h3>
          {weatherArticle} 
        </div>
        <div className="children-articles middle-article" >
          <img src={coral} alt="fish in coral"></img>
          <h3 className="middle-genre">{this.props.genre[1]}</h3>
          {politcsArticle}
        </div>
        <div className="children-articles last-article">
          <img src={woman} alt="woman with dead fish"></img>
          <h3 className="outside-genre">{this.props.genre[2]}</h3>
          {cultureArticle}
        </div>
      </section>

    )
  }
}