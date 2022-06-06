import React,{useEffect,useState} from "react";
import "./HowItWorks.css";
import login from "../login.png";
import search from "../voice-search.png";
import article from "../article.png";
import direction from "../direction.png";

const data1=[{
  name:'dilkash',

},
{
  name:'zoheb'
}]

 const data = [
  {
    title: "What does NewsDay.io do?",
    content:
      "NewsDay.io searches news using voice assistant functionality to save time and improve the user experience",
    img:'../login.png'
    },
  {
    title: "How to use voice assistant functionality of NewsDay.io?",
    content:
      "You can use voice assistant functionality by clicking on the bottom right mic icon button and then your voice is being started recording",
    img:'../voice-search.png'
    },
  {
    title: "How NewsDay.io is different from other news applications?",
    content:
      "In other news applications you have to search for news manually but in NewsDay.io the entire application runs on voice assistant functionality",
    img:'../article.png'
    },
  {
    title: "What kind of news we can search for in NewsDay.io?",
    content:
      "In NewsDay.io you can search for latest news , breaking news, search news by categories like:- Business, Entertainment, General, Health, Science, Sports, Technology, by terms like:-Coronavirus, Vaccine, Smartphones, Bitcoin, India, Donald Trump, AI, Gaming..., by sources like:-Wired, BBC News, Time, IGN, Buzzfeed, ABC News and many more",
      img:"../direction.png"
    },
];

function HowItWorks({work}) {
  const [works1,setWorks1] =useState(0)
  const [works2,setWorks2] =useState(1)
  const [works3,setWorks3] =useState(2)
  const [works4,setWorks4] =useState(3)


  useEffect(()=>{
   
    console.log(work)

  },[])
  return (
    <div className="howitworks">
      <h1>How It Works</h1>
      <div className="works__cards">
      
        {/* {data?.map((index,item)=>{
          return(
            <div className="works__card">
            <img style={{ height: "30px", width: "30px" }} src={item.img} />
  
            <h5>{item?.title}</h5>
            <p style={{ fontSize: "14px" }}>
              {item?.content}
            </p>
            </div>
          )
          

        })} */}
        
        <div className={works1===work?'works__design':'works__card'} data-value={works1}>
          <img style={{ height: "30px", width: "30px" }} src={login} />
          <h5>Register</h5>
          <p style={{ fontSize: "14px" }}>
            For using NewsDay.io you need to sign up first
          </p>
        </div>
        <div className={works2===work?'works__design':'works__card'} data-value={works2}>
          <img style={{ height: "30px", width: "30px" }} src={search} />

          <h5>Voice Search</h5>
          <p style={{ fontSize: "14px" }}>
            For searching news you can used the mic button. You can search
            latest and breaking news and news by various sources,terms and
            categories{" "}
          </p>
        </div>
        <div className={works3===work?'works__design':'works__card'} data-value={works3}>
          <img style={{ height: "30px", width: "30px" }} src={article} />

          <h5>Get news </h5>
          <p style={{ fontSize: "14px" }}>
            Get the search news articles and let the voice assistant read it for
            you if you want.{" "}
          </p>
        </div>
        <div className={works4===work?'works__design':'works__card'} data-value={works4}>
          <img style={{ height: "30px", width: "30px" }} src={direction} />

          <h5>Navigate</h5>
          <p style={{ fontSize: "14px" }}>
            Navigate between different pages using through NewsDay.io voice
            assistant functionality and also the newsday.io voice assistant can
            open news article for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
