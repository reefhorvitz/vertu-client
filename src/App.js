import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StyleLoader from "./Components/StyleLoader";

import data from './mockData';
import Profile from './static/images/profile-img.png';
import Application from "./Components/Application";
import Discover from "./Components/Discover";

function App() {
  return (
      <React.Fragment>
      <StyleLoader/>
      <Header name={"reef horvitz"} sellerImage={Profile}/>
      {/*<PropertyDetails {...data}/>*/}
      <Discover {...data}/>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
