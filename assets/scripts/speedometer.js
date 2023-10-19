const speedElement = document.querySelector("#speed");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let watchID = null;
startBtn.addEventListener("click",() =>{
    if(watchID)//se watchID estiver rodando não acessa funções do btn
        return;

    function handleSuccess(position){
        console.log(position)
        //velocidade é recemida em m/s, e convertida em km/h
        speedElement.innerText = position.coords.speed ? (position.coords.speed * 3.6).toFixed(1) : 0
    };
    function handleError(error){
        console.log(error.msg);
    };
    const options = { enableHighAccuracy: true}   

    watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, options)

    startBtn.classList.add("d-none");
    stopBtn.classList.remove("d-none");
})

stopBtn.addEventListener("click",() =>{
    if(!watchID)//se wacth id NÃO estiver rodadando não continua o comando
        return;
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
    startBtn.classList.remove("d-none");
    stopBtn.classList.add("d-none");
    
})