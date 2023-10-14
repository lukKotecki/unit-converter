/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputValue = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");
const outputLength = document.getElementById("output-length");
const outputVolume = document.getElementById("output-volume");
const outputMass = document.getElementById("output-mass");

let valueToConvert = 0;

convertBtn.addEventListener("click", function(){
    if(Number(inputValue.value)){
        valueToConvert = Number(inputValue.value);
    }else{
        valueToConvert = 1;
        inputValue.value = 1;
    }
    writeConverts(valueToConvert);
})

function writeConverts(convertNumber){
    outputLength.textContent = `${convertNumber} meters = ${convert(convertNumber,"feets")} feet | ${convertNumber} feet = ${convert(convertNumber,"meters")} meters`;
    outputVolume.textContent = `${convertNumber} liters = ${convert(convertNumber,"gallons")} gallons | ${convertNumber} gallons = ${convert(convertNumber,"liters")} liters`
    outputMass.textContent = `${convertNumber} kilos = ${convert(convertNumber,"pounds")} pounds | ${convertNumber} pounds = ${convert(convertNumber,"kilos")} kilos`
}

function convert(numberToConvert, convertToWhat){
    switch (convertToWhat){
        case "meters":
            return (numberToConvert/3.281).toFixed(3);
        case "feets":
            return (numberToConvert*3.281).toFixed(3);
        case "gallons":
            return (numberToConvert*0.264).toFixed(3);
        case "liters":
            return (numberToConvert/0.264).toFixed(3);
        case "pounds":
            return (numberToConvert*2.204).toFixed(3);
        case "kilos":
            return (numberToConvert/2.204).toFixed(3);
        default:
            return 0;
    }

}


