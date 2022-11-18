import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import {display} from "./currencyfunc.js";

//UI Logic
//------------------------------------------------------------------------------



window.addEventListener("load", function(event){
  event.preventDefault();
  const searchButton = document.getElementById("form");
  searchButton.addEventListener("submit", display);
});