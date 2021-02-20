import React from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
/* Fuente */
import Card from "./components/Card";
import Container from "./components/Container";
/* import Main from "./components/Main"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <>
      <Header className="header" >
        <div className="header__nav">
          <Link>Inicio</Link>
          <Link>Hoy</Link>
          <Link>Siguiendo</Link>
        </div>
        <SearchBar/>
        <div className="header__notices">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faCommentDots} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </Header>
      <Main />   
    </>
  );
};

export default App;
