const API_KEY = ;

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultCard = document.getElementById("result");
    const errorBox = document.getElementById("error");

    if (!city) {
        errorBox.textContent = "⚠ Please enter a city name!";
        resultCard.classList.add("hidden");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        errorBox.textContent = "";
        resultCard.classList.remove("hidden");

        document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById("icon").src = data.current.condition.icon;
        document.getElementById("temp").textContent = `${data.current.temp_c}°C`;
        document.getElementById("condition").textContent = data.current.condition.text;
        document.getElementById("humidity").textContent = data.current.humidity;
        document.getElementById("wind").textContent = data.current.wind_kph;

    } catch (error) {
        resultCard.classList.add("hidden");
        errorBox.textContent = "❌ City not found. Try again!";
    }
}

