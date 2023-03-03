export const navigate = (to) =>{
    const historyChangeEvent = new CustomEvent("historyChange",{
        detail:{to:to}
    })
    //이벤트 발생
    dispatchEvent(historyChangeEvent)
}
//navigate 함수 호출하면 이벤트가만들어지고 이벤트가 발생된다.
