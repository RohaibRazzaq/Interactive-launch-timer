function countdown (){
let day = document.getElementById('days');
 let hours = document.getElementById('hours');
 let mins = document.getElementById('mins');
 let sec = document.getElementById('seconds');

 const endDate = new Date("September 30 2024, 00:00:00").getTime();
 const now = new Date().getTime();
 let difference = endDate-now;
 let seconds = 1000;
 let minutes = seconds * 60;
 let hours1 = minutes * 60;
 let days1 = hours1 * 24;

 day.innerHTML = Math.floor(difference/days1);
 hours.innerHTML = Math.floor((difference % days1)/hours1)
 mins.innerHTML = Math.floor((difference % hours1)/minutes)
 sec.innerHTML = Math.floor((difference % minutes)/seconds)
}

    setInterval(countdown, 1000);


