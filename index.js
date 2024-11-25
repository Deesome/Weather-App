const searchButton = document.getElementById("search")
const input = document.getElementById("cityName")


searchButton.addEventListener("click", () => {
    const cityName = input.value
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&{id}&units=metric`
    //Updaye your Wethaer API ID 




    fetch(apiURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Fetch Failed: Error : ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            // Updating UI
            
            const city = document.getElementById("city")
            const temp = document.getElementById("temp")
            const speed = document.getElementById("speed")
            const humidity = document.getElementById("humidity")
            const weatherIcon = document.getElementById("weather-icon")
            const description = document.getElementById("description")
            
            // Weather icon
            const icon = data.weather[0].icon
            const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
            weatherIcon.src = iconURL;
            weatherIcon.alt = data.weather[0].description;
            

            // Display Weather card
            const weatherCard = document.getElementById("weather-card")
            weatherCard.classList.add("flex")
            weatherCard.classList.remove("hidden")

            
            city.innerText = data.name;
            temp.innerText = `${data.main.temp} °C`;
            speed.innerText=`${data.wind.speed} kmph`;
            humidity.innerText=`${data.main.humidity}`;
            description.innerText = `"${data.weather[0].description}"`;
           

            

        }
        )
        .catch((error) => {
            console.log(error)
            throw error
        })

})






