const searchButton = document.getElementById("search")
const input = document.getElementById("cityName")


searchButton.addEventListener("click", () => {
    const cityName = input.value
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=84affeb5aefdfebd9b9861f20612afc4&units=metric`




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

            // Display Weather card
            const weatherCard = document.getElementById("weather-card")
            weatherCard.classList.add("flex")
            weatherCard.classList.remove("hidden")

            
            city.innerText = data.name
            temp.innerText = data.main.temp

            console.log(data.weather[0].icon)

        }
        )
        .catch((error) => {
            console.log(error)
            throw error
        })

})






