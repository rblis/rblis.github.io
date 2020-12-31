

window.addEventListener('load',()=>{
    let long;
    let latt;
    let tempDesc = document.querySelector('.temperature-description');
    let tempDegr = document.querySelector('.temperature-degree');
    let locTmzn = document.querySelector('.location-timezone');
    let unitSection = document.querySelector('.temperature span');
    let iconic = document.getElementById('icon');
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            latt = position.coords.latitude;
        
            const key = `a7825a55501e30dd400c9c9eb73f26d3`;
            //const proxy = 'https://cors-anywhere.herokuapp.com/';
            var units = 'imperial';
            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&units=${units}&appid=${key}`;
            //alert(api);
        
            fetch(api).then(response => {
                return response.json();
            }).then(data =>{
                console.log(data);
                //const {temperature, summary} = data;
                tempDesc.textContent = data.weather[0].description;
                tempDegr.textContent = data.main.temp;
                locTmzn.textContent = data.name;
                iconic.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
                document.querySelector('.temperature').addEventListener("click", () => {
                    if(unitSection.textContent === 'F'){
                        units = 'metric';
                        unitSection.textContent == 'C';
                    }
                    else{
                        units = 'imperial';
                        unitSection.textContent == 'F';
                    }
                });

            });    
        });
        
    }
});
            
//39.0002
//-77.5033
//https://api.openweathermap.org/data/2.5/weather?lat=39.0002&lon=-77.5033&appid=a7825a55501e30dd400c9c9eb73f26d3