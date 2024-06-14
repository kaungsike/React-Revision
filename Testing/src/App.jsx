// import em from "em"
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListGroup from "./ListGroup";
import Status from "./Status";
import React from "react";

const App = () => {
  return (
    <section
      id="container"
      className="border bg-teal-200 border-teal-400 w-[500px] mx-auto mt-10 p-10"
    >
      <Heading  title="Hello" className="aaa bbb ccc hhh"/>


      <ListCreateForm />

      <Status />

      <ListGroup />
      
    </section>
  );
};

export default App;
