import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Image from "./ascets/react.jfif";

const App = () => {
  const data = {
    username: "1",
    caption: "Hello 1",
    imageUrl: `${Image}`,
  };

  return (
    <div className="app">
      <Header />
      <Post data={data} />
    </div>
  );
};

export default App;
