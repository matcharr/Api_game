import { Home } from "./Home";
import { PageDetail } from "./PageDetail";
import { PageList } from "./PageList"

console.log("routes")
const routes = {
    "": Home,
    "pagelist": PageList,
    "pagedetail": PageDetail,
};

export { routes };