function getTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
};
var nIntervId = setInterval(getTime, 1000);
setTimeout(function() {clearInterval(nIntervId)}, 4000);