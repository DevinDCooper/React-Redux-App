import React from "react";
import { connect } from "react-redux";

import { fetchData } from "./actions";




const Funny = props => {
    return (
      <div id="funny">
        {props.isLoading ? (
          <div> Loading  laughs </div>
        ) : (
          <div>
            <button onClick={() => props.fetchData()}>fetch Jokes</button>
            {props.error && (
              <div style={{ color: "red" }}>*Error No Jokes *</div>
            )}
           <div> {props.dailyJokes.map(jj => {
               return(
                
                   <p>Jokes number: {jj.number}</p>,
                   <p> Jokes: {jj.dailyJokes} </p>

               )
           })}    </div>
          </div>
        )}
      </div>
    );
  };
  

const mapStateToProps = state => {
    return {
      dailyJokes: state.dailyJokes,
      isLoading: state.isLoading,
      error: state.error
    };
  };


  export default connect(
    mapStateToProps,
    { fetchData }
  )(Funny);
  