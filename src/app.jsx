import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Quote from './quote';
import Footer from './footer';
import classes from './app.module.css';

const App = () => {
  const [background, setBackground] = useState("#333");

  const changeBackground = () => {
    const palette = [
      "#8aa399",
      "#2C2A4A",
      "#907AD6",
      "#85c1cc",
      "#960200",
      "#AABD8C",
      "#DC851F",
      "#CC2936"
    ];

    const randomBackground = palette[Math.floor(Math.random() * palette.length)];

    setBackground(randomBackground);
  }

  return (
    <div className={classes.app} style={{backgroundColor: background}}>
      <Quote switchColor={() => changeBackground()}/>
      
      <Footer linkColor={background}/>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />)