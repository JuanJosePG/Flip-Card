// Flip card and get name
function flipAndName(){
    let nameValue = document.getElementById("name").value;
    if(nameValue===""){
        nameValue="?";
    }

    document.getElementById("title-name").innerHTML = nameValue;

    document.querySelector(".card").classList.toggle("flip");
}

function update(){
    // Change day
    let day_span = document.getElementById("day");
    let hour_span = document.getElementById("hour");
    let minute_span = document.getElementById("minute");

    const fullDate = new Date();
    let hour = fullDate.getHours();
    let minute = fullDate.getMinutes();

    if(hour >= 6 && hour <12){
        day_span.innerHTML = ` morning`;
    } else if(hour >= 12 && hour <19){
        day_span.innerHTML = ` afternoon`;
    } else {
        day_span.innerHTML = ` night`;
    }

    // Add hour:minute
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }

    hour_span.innerHTML=hour;
    minute_span.innerHTML=`:${minute}`;
}

setInterval(update, 100);
