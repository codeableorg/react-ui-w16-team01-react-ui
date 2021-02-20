import styles from "./../stylesheets/main.css"
import Container from "./Container";
import Card from "./Card";
import { STORE } from "../store";

function dateTitle(date){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  let [a,m,d]= date.split("-");
  let dateArticle = new Date(a,m-1,d);
  return dateArticle.toLocaleDateString("es-ES", options)
}

const Main = () => {
  let dateTitle1 = '2021-02-18';
  let dateTitle2 = '2021-02-17';
  const title1 = dateTitle(dateTitle1); 
  const title2 = dateTitle(dateTitle1); 


  return (
    <main className="main">
      <Container title={title1}>
        {STORE.map((article) => {
          if (dateTitle1 == article.date){
            return <Card description={article.description}
            title = {article.title}
            src = {article.img_url}
            size ={article.size}
            key = {article.title}
           /> 
          }
        })}
      </Container>
      <Container title={title2}>
        {STORE.map((article) => {
          let [a,m,d]= article.date.split("-");
          let dateArticle = new Date(a,m-1,d);
          var options = { year: 'numeric', month: 'long', day: 'numeric' };
          if (dateTitle2 == article.date){
            return <Card description={article.description}
            title = {article.title}
            src = {article.img_url}
            size ={article.size}
            key = {article.title}
            /> 
          }

        })}
      </Container>
    </main>
  );
};

export default Main;
