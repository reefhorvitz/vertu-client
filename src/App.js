import React, {useEffect} from 'react';
import PropertyDetails from "./Components/PropertyDetails";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StyleLoader from "./Components/StyleLoader";

import data from './mockData';
import Profile from './static/images/profile-img.png';
import Application from "./Components/Application";

function App() {
  return (
      <React.Fragment>
      <StyleLoader/>
      <Header name={"reef horvitz"} sellerImage={Profile}/>
      {/*<PropertyDetails {...data}/>*/}
      <Application {...data}/>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
