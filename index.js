const apiKey="e17e2e5406aa426a7c54c6b64eceb908"
const searchBox=document.querySelector(".search-box")
const searchBtn=document.querySelector(".search")
// let city="delhi"
const weather=document.querySelector(".weather")
const weatherIcon=document.querySelector(".weather-icon")
const cityEle=document.querySelector(".city")
const humidityEle=document.querySelector(".humidity-value")
const tempEle=document.querySelector(".temp")
const windEle=document.querySelector(".Wind-Speed-value")

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
async function checkWeather(city){

    const response=await fetch (apiUrl+city+`&appid=${apiKey}`)
    const data=await response.json();
    console.log(data)
    if (response.status==404){
        document.querySelector(".error").style.display="block"
        weather.style.display="none"
    }
    else {

    
    cityEle.textContent=data.name;
    humidityEle.textContent=data.main.humidity+"%"
    tempEle.textContent=Math.floor(data.main.temp)+"°C"
    windEle.textContent=data.wind.speed+" m/s";
    weatherIcon.src=`assets/img/${data.weather[0].main}.png`
    weather.style.display="block"
    document.querySelector("error").style.display="none"


    




}
}
searchBtn.addEventListener("click",function(){
    
    checkWeather(searchBox.value)


})