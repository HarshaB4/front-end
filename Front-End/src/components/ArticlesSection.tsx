import React from "react";
import "../styles/ArticlesSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Article1 from "../assets/article1.jpg"
import Article2 from "../assets/article2.jpg"
import Article3 from "../assets/article3.jpg"
import Article4 from "../assets/article4.jpg"

const ArticlesSection = () => {
  const articles = [
    {
      img: Article1,
      title: "Congue velit risus",
      text: "Nunc gravida semper tellus neque scelerisque eget tincidunt in."
    },
    {
      img: Article2,
      title: "Ut mauris",
      text: "Phasellus venenatis massa bibendum posuere dictum tristique."
    },
    {
      img: Article3,
      title: "Aliquam tortor nunc",
      text: "Leo mollis fermentum praesent in condimentum id velit purus in."
    },
    {
      img: Article4,
      title: "Fusce non morbi",
      text: "In sed bibendum metus pretium cursus tellus pharetra."
    }
  ];

  return (
    <div className="articles-container">
      
     
      <div className="articles-header">
        <h2>Articles by Collectors</h2>

        <div className="more-articles">
          More Articles <ArrowForwardIcon className="more-icon" />
        </div>
      </div>

   
      <div className="articles-grid">
        {articles.map((item, index) => (
          <div className="article-card" key={index}>
            <img src={item.img} alt={item.title} className="article-image" />

            <div className="article-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <div className="read-more">
                Read article <ArrowForwardIcon className="read-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ArticlesSection;
