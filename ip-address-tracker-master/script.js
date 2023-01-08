const successCallback = (position) => {
    let lat = position.coords.latitude
    let lon = position.coords.longitude

    console.log(lat, lon);
    
var map = L.map('map').setView([lat, lon], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var greenIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize:     [40, 50], // size of the icon
    iconAnchor:   [20, 49], // point of the icon which will correspond to marker's location
});

L.marker([lat, lon], {icon: greenIcon}).addTo(map);    
};

navigator.geolocation.getCurrentPosition(successCallback);




// GETTING IP ADDRESS
async function address(){
    const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_kjqQZqx9nOIpQXPw8feEbz3V0D7ks`);
    const result = await response.json(); 

    console.log(result);

    const input = document.querySelector("input");
    input.value = result.ip

    const ipAddress = document.querySelector("#ip");
    ipAddress.textContent = result.ip


    const zone = document.querySelector("#timezone");
    zone.textContent = result.location.timezone


    const isp = document.querySelector("#isp");
    isp.textContent = result.isp


    const place = document.querySelector("#location");
    place.textContent = result.location.region + ',' + ' ' + result.location.country
}

address()


const searchBtn = document.querySelector(".button");
searchBtn.addEventListener("click", searching);

async function searching() {
    const input = document.querySelector("input");


    const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_kjqQZqx9nOIpQXPw8feEbz3V0D7ks&ipAddress=${input.value}`);
    const result = await response.json(); 

    console.log(result);

    const ipAddress = document.querySelector("#ip");
    ipAddress.textContent = result.ip


    const zone = document.querySelector("#timezone");
    zone.textContent = result.location.timezone


    const isp = document.querySelector("#isp");
    isp.textContent = result.isp


    const place = document.querySelector("#location");
    place.textContent = result.location.region + ',' + ' ' + result.location.country
}
