import React from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import SearchBar from "./components/SearchBar";
/* import Main from "./components/Main"; */

const App = () => {
  return (
    <>
      <Header className="header" >
        <Link>Inicio</Link>
        <Link>Hoy</Link>
        <Link>Siguiendo</Link>
        <SearchBar/>

      </Header>
      {/* <Main /> */}
    </>
  );
};

export default App;
