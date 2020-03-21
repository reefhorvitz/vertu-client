import React from 'react';
import Header from './Containers/Header';
import Footer from "./Components/Footer";
import StyleLoader from "./Components/StyleLoader";
import OnLoad from './Containers/onLoad';
import {Provider} from "react-redux";
import store from "./Redux/store";
import Routes from "./routes";

function App() {
  return (
      <Provider store={store}>
          <StyleLoader/>
          <OnLoad/>
          <Header/>
          <Routes/>
          <Footer/>
      </Provider>
  );
}

export default App;
