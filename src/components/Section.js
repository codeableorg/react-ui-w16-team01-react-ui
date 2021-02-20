import Card from "./Card";
import { STORE } from "../store";


const Section = ({dateTitle}) => {
 
   return (
     <section>
      <h3> {dateTitle} </h3>
      {STORE.map((article) => {
          let [a,m,d]= article.date.split("-");
          let dateArticle = new Date(a,m-1,d);
          var options = { year: 'numeric', month: 'long', day: 'numeric' };
          if (dateTitle == article.date){
          return <Card description={article.description}
          title = {article.title}
          src = {article.img_url}
          size ={article.size}
          key = {article.title}
          /> 
          }

        })}
     </section>



   ) 
      
};

export default Section;