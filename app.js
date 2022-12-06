let timestanmp = document.getElementById('timestamp')
let aujourdhui = new Date()

timestanmp.innerHTML = aujourdhui.toLocaleDateString()
console.timeStamp();

let localDate = document.getElementById('localDate')
const aujourdhui1 = new Date(Date.UTC(2022,11,6))
const options = {
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'numeric',
}
localDate.innerHTML = aujourdhui1.toLocaleDateString(aujourdhui1,options);

let localTime = document.getElementById('localTime')
let heure = new Date();
heure.setHours(9);
heure.setMinutes(50);

localTime.innerHTML=
    "heure: " + heure.getHours()+ "<br>" +
    "minutes: " + heure.getMinutes()