import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";


export const fetchData = () => {
    return dispatch  => {
        dispatch({
            type: FETCH_DATA
        });
        setTimeout(() => {  
            axios
            .get("https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
            .then(res => {
                console.log("DC: actions/index.js: axios.then: res: ", res);
                const dailyJokes = res.data.map(joke => {
                    const noJokes = joke.insult;
                    return {
                       number: joke.number,
                       dailyJokes: noJokes
                    };
                });
                dispatch({ type: DATA_SUCCESS, payload: [...dailyJokes]})
            })
            .catch(err => {
                console.log("DC: actions/index.js: axios.catch: err: ", err );
                dispatch({type: DATA_ERROR, payload: err });
            })
        }, 1500)
    };
};