import axios from "axios";
import axiosRetry from "axios-retry";
import React, { useState, useEffect } from "react";

function Axiosdemo() {
    const [gcount, setGcount] = useState(0);
    const [errMsg, setErrMsg] = useState("");
    const [retryMsg, setRetryMsg] = useState("");
    const [rcount, setRcount] = useState(0);
   
    function handleClick() {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
            setGcount(res.data.length);
        });

    };
    function handleClickError() {
        axios.get("https://jsonplaceholder.typicode.com/photos-dumm").then(res => {
            setGcount(res.data.length);
        }).catch(e => {
            setErrMsg(e.message);
        });

    };

    function handleClickRetry() {
        axiosRetry(axios, { retryDelay: 100 });

        axios.get("https://jsonplaceholder.typicode.com/photos-dumm").then(res => {
            setGcount(res.data.length);
        }).catch(e => {
            setRetryMsg(e.message);
        });
    };
    
    useEffect(() => {
        console.log("useEffect: no param");
    });

    return (
        <>
            <div>

                <h1>Axios demo</h1>
                <button onClick={handleClick} className="buttonClzz" type="button">GET Images</button>{gcount}
                <button onClick={handleClickError} className="buttonClzz" type="button">GET Images Error</button>{errMsg}
                <button onClick={handleClickRetry} className="buttonClzz" type="button">GET Images api retry</button>{retryMsg}
            </div>
        </>
    );
}
export default Axiosdemo;