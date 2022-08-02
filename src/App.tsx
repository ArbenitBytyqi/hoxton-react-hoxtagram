import { useEffect, useState } from "react";
import "./App.css";
import { Article } from "./components/Article";

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => setImages(imagesFromServer));
    fetch("http://localhost:3000/comments")
      .then((resp) => resp.json())
      .then((commentsFromServer) => setComments(commentsFromServer));
  }, []);

  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />
      <section className="image-container">
        <Article />
      </section>
    </div>
  );
}

export default App;
