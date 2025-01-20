import React, { useEffect, useState } from "react";

function Main(props) {
  const [meme, setMeme] = useState({
    topText: "Hello Cutie",
    bottomText: "Ky krr rhi ho ?",
    imageUrl:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getRandomMeme() {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: randomMeme.url,
    }));
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = meme.imageUrl;
    link.download = "meme.png"; // you can set any name here
    link.click();
  }

  function handleShare() {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this meme!",
          url: meme.imageUrl,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Share not supported in this browser.");
    }
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.imageUrl} alt="Generated meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>

      <div className="actions">
        <button onClick={handleDownload}>Download </button>
        <button onClick={handleShare}>Share </button>
      </div>
    </main>
  );
}

export default Main;
