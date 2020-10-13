import "../sass/styles.scss";
import moment from "moment";
import { routes } from "./routes";
import { Home } from "./Home";
import { PageList } from "./PageList"
import { PageDetail } from "./PageDetail";

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

Home();
PageList();
PageDetail();