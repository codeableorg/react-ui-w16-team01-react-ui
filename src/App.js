import React from "react";
import Header from "./components/Header";
import Link from "./components/Link";
/* import Main from "./components/Main"; */

const App = () => {
  return (
    <>
      <Header className="header" >
        <Link/>
        <p>Search</p>
        <Link/>
      </Header>
      {/* <Main /> */}
    </>
  );
};

export default App;

