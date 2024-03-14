// scripts

const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const currentTime = document.getElementById("time");


// For the Time
const newTime = new Date();
currentTime.innerHTML = activeTime();


function activeTime (){
    let Hours = newTime.getHours();
    let min = newTime.getMinutes();
    let sec = newTime.getSeconds();
    let amOrPm = Hours >= 12 ? "pm" : "am";
    Hours = (Hours % 12 ) || 12;

    return `${Hours}:${min}:${sec} ${amOrPm}`
}




// window loading reset
window.addEventListener("load", ()=>{
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // add loading feature
    convertBtn.innerHTML = "<span><i class='ri-loader-2-line'></i>Converting..</span>";
    setTimeout(()=>{
        convertBtn.innerHTML = "<span>Convert</span>"
    }, 1000)
})




function convertToCelsius(){
    let inputValue = degree.value;

    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (parseInt(inputValue)-32)*(9/5);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; C`;
       }
   
       else if(tempType.value === "kelvin"){
           const kelvinToCelsius = parseInt(inputValue) - 273.15;
           celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg; C`;
       }

       else if (tempType.value === "Celsius") {
        const celsiusConveter= parseInt(inputValue) + 273.15;
        
        celsiusField.innerHTML = `${celsiusConveter.toFixed(3)} &deg; K`;
       }
    }, 1100)
}
