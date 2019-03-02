window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let precipPossibility = document.querySelector(".precip-possibility");
  let temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      // Note: const proxy changed from http to https 2/17/2019 to try and enable app on secure site.
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/a277c40af03c038919ffcb9e6fc8b0e9/${lat},${long}`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        const { temperature, summary, icon, precipProbability  } = data.currently;

        //Set DOM Elements from the API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        precipPossibility.textContent = precipProbability;

        //Formula for Celsius
        let celsius = (temperature - 32) * (5 / 9);
        
        //Set Icon
        setIcons(icon, document.querySelector(".icon"));

        //Change temperature to Celsius/Farenheit
        temperatureSection.addEventListener("click", () => {
          if (temperatureSpan.textContent === "F") {
            temperatureSpan.textContent = "C";
            temperatureDegree.textContent = Math.floor(celsius);
          } else {
            temperatureSpan.textContent = "F";
            temperatureDegree.textContent = temperature;
          }
        });
      });
    });  
  }

  function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
  }

});