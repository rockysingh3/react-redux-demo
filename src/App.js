import React from "react";
import { Provider } from "react-redux";
import store  from "./redux/store";
import './App.css';


import CakeContainer from './components/CakeContainer';
import HookCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import MongoContainer from "./components/MongoContainer";



function App() {
  return (
  /* pass in the store as a prop to the provider so you can consume the redux store  */
  <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <IceCreamContainer />
        {/* <CakeContainer /> */}
        <MongoContainer />
      </div>
    </Provider>
  )
}

export default App;
