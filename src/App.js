import React from "react";
import jumboData from "./fixtures/jumbo";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainer } from "./containers/faqs";

export default function App() {
  console.log(jumboData);

  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
