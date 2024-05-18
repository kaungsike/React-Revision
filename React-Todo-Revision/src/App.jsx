import React from "react";
import Header from "./Header";
import ListCreateForm from "./ListCreateForm";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";

const App = () => {
  return (
    <section
      id="container"
      className="border bg-teal-200 border-teal-400 w-[500px] mx-auto mt-10 p-10"
    >
      <Header/>
      <ListCreateForm/>
      <ListStatus/>
      <ListGroup/>
    </section>
  );
};

export default App;
