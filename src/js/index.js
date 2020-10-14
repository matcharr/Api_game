import 'bootstrap';
import "../sass/styles.scss";
import moment from "moment";
import { routes } from "./routes";

console.log("Hello World");
console.log(moment().format("MMMM Do YYYY"));
console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment().subtract(10, "days").calendar());
console.log("TEST", process.env.DB_HOST);

let pageArgument;

const setRoute = () => {
    let path = window.location.hash.substring(1).split("/");
    pageArgument = path[1] || "";

    var pageContent = document.getElementById("pageContent");
    routes[path[0]](pageArgument);
    return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

const searchBar = document.getElementById("searchBar");
console.log(searchBar.value);

let searching = function searching() {
    console.log(searchBar.value);
    window.location = getElementById;
};

document.getElementById("searchButton").addEventListener("click", searching);
console.log(searchBar);