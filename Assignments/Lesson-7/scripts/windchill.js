function windchill(){
    var temperature = 46
    var wspeed = 10
    var windchill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(wspeed,0.16) +.4275 * temperature * Math.pow(wspeed,0.16))
    alert("Windchill is " + windchill + "degrees Fahrenheit")
}