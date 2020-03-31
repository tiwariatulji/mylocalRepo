
import React from "react"

console.log("App.js is running");
var FirstExample =(
    <div>
        <h1>Hello Wordld</h1>
        <p>This is some info</p>
    </div>

);
var appRoot = document.getElementById('root');
ReactDOM.render(FirstExample,appRoot);