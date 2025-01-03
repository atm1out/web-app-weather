async function getWeather() {
    const city = document.getElementById("cityInput");
    const apiKey = "af32d385ac2a0b1c39ad444b8c21e5ad";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
}