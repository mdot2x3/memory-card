import "./styles/App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card.jsx";

function shuffle(array) {
  // create a shallow copy (original unmodified)
  const arr = [...array];
  // move backwards from last index
  for (let i = arr.length - 1; i > 0; i--) {
    // fisher-yates: picks a random index j between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));
    // shorthand array destructuring and assignment (no need for a temp variable)
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const [imageSrc, setImageSrc] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(
          `https://jetsetradio-api.onrender.com/v1/api/graffiti-tags?size=S`,
        );
        const fetchData = await response.json();
        console.log(fetchData);
        const shuffled = shuffle(fetchData);
        const selected = shuffled.slice(0, 12);
        // for each item in selected, map a new object with imageUrl and tagName to state
        setImageSrc(
          selected.map((item) => ({
            imageUrl: item.imageUrl,
            tagName: item.tagName,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <div className="card-container">
        {imageSrc.map((item, idx) => (
          <Card key={idx} imageUrl={item.imageUrl} tagName={item.tagName} />
        ))}
      </div>
    </>
  );
}

export default App;
