import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./style";
import Hero from "./Hero";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import Faq from "./faq";
import { useAuth } from "../context/AuthContext";

const infoCards = [
  {
    color: "#00838f",
    title: "Search Latest News",
    text: "Give me the latest news",
  },
  {
    color: "#1565c0",
    title: "Search News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "Search News by Terms",
    info: "Coronavirus, Vaccine, Smartphones, Bitcoin, India, Donald Trump, AI, Gaming...",
    text: "Give me some news about vaccine",
  },
  {
    color: "#283593",
    title: "Search News by Sources",
    info: "Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from BBC news",
  },
];

const NewsCards = ({ articles, activeArticle, index, setIndex,work,work2,work3,work4 }) => {
  const classes = useStyles();
  const currentUser = useAuth();
  // const [index, setIndex] = useState(null);
  if (!articles.length) {
    return (
      // <Grow in>
      //     <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      //         {infoCards.map((infoCard)=>(
      //             <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
      //                 <div className={classes.card} style={{backgroundColor:infoCard.color}}>
      //                     <Typography variant="h5">{infoCard.title}</Typography>
      //                     {infoCard.info ? (<Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[3]}</strong>: <br />{infoCard.info}</Typography>) : null}
      //                     <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
      //                 </div>
      //             </Grid>
      //         ))}
      //     </Grid>
      // </Grow>
      <div>
        <Hero />
        {/* <Benefits /> */}

        <HowItWorks work={work} 
/>
        <Faq index={index} setIndex={setIndex} />
      </div>
    );
  }
  return (
    <Grow in>
      {currentUser ? (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>You need to login first</div>
      )}
    </Grow>
  );
};

export default NewsCards;
