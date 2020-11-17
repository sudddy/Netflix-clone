import React from "react";
import jumboData from "./fixtures/jumbo";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
  console.log(jumboData);

  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}
