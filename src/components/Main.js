import Section from "./Section";
import { STORE } from "../store";

const Main = () => {
  return (
    <main className="main">
     <Section/>
     { STORE.forEach((article) => {
       return (<p key={article.title}>{article}</p>)
     })}
    </main>
  );
};

export default Main;
