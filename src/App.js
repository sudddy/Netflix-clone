import React from "react";
import jumboData from "./fixtures/jumbo";
import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
  console.log(jumboData);
  return <JumbotronContainer />;
}
