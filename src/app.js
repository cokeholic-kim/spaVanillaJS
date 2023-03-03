import Router from "./router.js";
import { navigate } from "./utils/navigate.js";

export default function App({target}){
    this.$container = target;
    const init = ()=>{
        console.log("여기에요 ")
        document.querySelector(".navbar").addEventListener('click',(e)=>{
          
            // 이벤트제거
            e.preventDefault();
            const targetURl = e.target.href.replace('http://127.0.0.1:5500',"")
            console.log(targetURl); // 클릭한 개체의 href
            navigate(targetURl)
        })
        new Router(this.$container);
    }
    init()
}