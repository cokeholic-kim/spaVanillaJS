import App from "./src/app.js"




//초기 html문서를 완전히 다 받아왔을때 실행
window.addEventListener("DOMContentLoaded",()=>{
    console.log("bbb");
    new App({target:document.querySelector('#app')})
}) 