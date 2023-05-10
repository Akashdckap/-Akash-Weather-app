
const search = document.querySelector(".search")
const subbtn = document.querySelector(".sub-btn")
const output = document.querySelector(".values")
const quotes = document.querySelector(".quotes")



window.addEventListener("DOMContentLoaded",()=> defaultapi())
subbtn.addEventListener("click",()=>search.value == ""? window.location.reload() :defaultapi())
search.addEventListener("keypress",(e)=>{
   if(e.key === "Enter"){
      defaultapi()
   }
})

function defaultapi (){
   let searchCity = search.value
   let link = searchCity =="" ? `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=816366c90cdddb7e620a6932c7df52ff` :`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=816366c90cdddb7e620a6932c7df52ff`
   fetch(link)
   .then(result=>result.json())
   .then(datas=>{
      let cityName = datas.name
      let temp = Math.round(datas.main.temp-273.15)
      let weatherImage = datas.weather[0].icon
      let windSpeed = datas.wind.speed
      // let date = new Date(datas.sys.sunrise *1000).toString();
      let feelsLike = Math.round(datas.main.feels_like-273.15)
      

   let information = `<p>${cityName}</p><h4>${temp}°C</h4><img class="image"src="http://openweathermap.org/img/w/${weatherImage}.png"><h3>Windspeed: ${windSpeed}Km-Ph</h3><h3>Feels like: ${feelsLike}</h3>`
      output.innerHTML = information

   })
}



