let date = new Date();
let hours = document.getElementById("hours")
let mins = document.getElementById("mins")
let seconds = document.getElementById("seconds")

setInterval(() =>{
    let date =new Date();
    let hr = date.getHours() > 12? date.getHours()-12:date.getHours()

    hours.innerHTML=hr<10? "0"+hr : hr
    mins.innerHTML=date.getMinutes() < 10 ?"0"+date.getMinutes() : date.getMinutes()
    seconds.innerHTML=date.getSeconds() < 10 ?"0"+date.getSeconds() : date.getSeconds()

},1000)
 
