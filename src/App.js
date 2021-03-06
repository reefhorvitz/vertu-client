import React from 'react';
import StyleLoader from "./Components/StyleLoader";
import OnLoad from './Containers/onLoad';
import {Provider} from "react-redux";
import store from "./Redux/store";
import Routes from "./routes";
import Toastr from "./Components/Toastr";

function App() {
  return (
      <Provider store={store}>
          <StyleLoader/>
          <OnLoad/>
          <Toastr/>
          <Routes/>
      </Provider>
  );
}

export default App;
