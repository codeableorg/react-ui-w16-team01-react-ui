import React from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import Card from "./components/Card"
/* import Main from "./components/Main"; */

const App = () => {
  return (
    <>
      <Header className="header" >
        <Link>Hola</Link>
        <p>Search</p>
        <Link/>
      </Header>
      {/* <Main /> */}
      <Card description="Una Foto"
      title="Intereses, el nuevo widget de pinterest"
      src="https://i.picsum.photos/id/0/536/354.jpg?hmac=pYva7VotLDyw33JFwZdFMkf5Egtdk2Z6p7Rr8nO6ngs"
      size="large"
      />
    </>
  );
};

export default App;
