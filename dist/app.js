if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude.toString();
        var lon = position.coords.longitude.toString();
        const key = "7a2163f60a66396af721333b5c82d222";

        var url = "http://api.weatherstack.com/current?access_key=" + key + "&query=" + lat + "," + lon;

        fetch(url)
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                console.log(data);
                const cityDiv = document.getElementById('city');
                const countryDiv = document.getElementById('country');
                const statusDiv = document.getElementById('status');
                const statusIconDiv = document.getElementById('statusIcon');
                const tempDiv = document.getElementById('temp');
                const windDiv = document.getElementById('wind');
                const precipDiv = document.getElementById('precip');
                const pressureDiv = document.getElementById('pressure');
                const humidityDiv = document.getElementById('humidity');
                const feelslikeDiv = document.getElementById('feelslike');
                const vesibilityDiv = document.getElementById('visibility');
                const uvDiv = document.getElementById('uv');
                const isdayDiv = document.getElementById('isday');
                countryDiv.innerHTML = data.location.country;
                cityDiv.innerHTML = data.location.name;
                statusDiv.innerHTML = data.current.weather_descriptions[0];
                statusIconDiv.src = data.current.weather_icons[0];
                tempDiv.innerHTML = data.current.temperature;
                windDiv.innerHTML = data.current.wind_speed;
                precipDiv.innerHTML = data.current.precip;
                pressureDiv.innerHTML = data.current.pressure;

                humidityDiv.innerHTML = data.current.humidity;
                feelslikeDiv.innerHTML = data.current.feelslike;
                vesibilityDiv.innerHTML = data.current.visibility;
                uvDiv.innerHTML = data.current.uv_index;
                isdayDiv.innerHTML = data.current.is_day;

            })
            .catch(function() {
                console.log("error");
            });




    });
}