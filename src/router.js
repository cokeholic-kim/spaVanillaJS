import { routes } from "./contants/routerInfo.js";

export default function Router($container){
    this.$container = $container;
    //routes 배열을 돌며 path속성이 location.pathname 과 일치하는 객체를 리턴해줌
    const findRoute = () =>{
        const matchRoute = routes.find(route => route.path.test(location.pathname));
        const TargetPage = matchRoute.element
        new TargetPage(this.$container)
    }
    const init = ()=>{
        window.addEventListener('historyChange',(e)=>{
            const {to} = e.detail
            history.pushState(null,"",to)
            findRoute()
        })
        window.addEventListener("popstate",()=>{
            findRoute()
        })
    }
    init()
    findRoute()
}