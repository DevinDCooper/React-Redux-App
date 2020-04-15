import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer }  from "./reducers";
import Funny from "./Funny";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>LOL</h1>
     <h4>Need a laugh? </h4>
     <Funny/>
    </div>
    </Provider>
  );
}


