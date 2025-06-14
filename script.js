async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key
  const weatherResult = document.getElementById("weather-result");

  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const { name, main, weather } = data;

    weatherResult.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Weather:</strong> ${weather[0].main} - ${weather[0].description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
