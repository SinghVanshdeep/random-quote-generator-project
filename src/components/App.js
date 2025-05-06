import React, { useState } from 'react';

function App(){
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState("");
  const apiURL = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  async function handleClick(){
    setLoading('Updating...');
    try{
      const response = await fetch(apiURL, {method: 'GET', headers: {'X-Api-Key': apiKey}});
      if(!response.ok) throw new Error('API Response was not ok');
      const data = await response.json();
      setQuote(data[0]["quote"]);
      setLoading("");
    }catch(error){
      console.error('Error:',error);
    }
  }

  return (
    <div id="main">
      <div id="container">
        <p className="h3 playfair-display-text mt-4">Random Quote Generator</p>
        <p className="h2 playfair-display-quote mt-2">"{quote}"</p>
        <p className="h6 playfair-display-text">{loading}</p>
        <button className="btn mb-4" onClick={handleClick}>GET A QUOTE</button>
      </div>
    </div>
  );
}

export default App;
