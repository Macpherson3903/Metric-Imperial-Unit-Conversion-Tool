/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-el")
const inputField = document.getElementById("input-el")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

convertBtn.addEventListener('click', function () {
    let value = Number(inputField.value)
    runConversions(value)
})

function runConversions(value) {
    const meterToFeet = value * 3.281
    const feetToMeter = value / 3.281
    const litersToGallons = value * 0.264
    const gallonToLiters = value / 0.264
    const kiloToPounds = value * 2.204
    const poundsToKilo = value / 2.204

    //Round to 3 decimal places
    const roundMeterToFeet = meterToFeet.toFixed(3)
    const roundFeetToMeter = feetToMeter.toFixed(3)
    const roundLiterToGallon = litersToGallons.toFixed(3)
    const roundGallonToLiter = gallonToLiters.toFixed(3)
    const roundKiloToPounds = kiloToPounds.toFixed(3)
    const roundPoundsToKilo = poundsToKilo.toFixed(3)

    //Display result in the resulf fields
    lengthResult.textContent = `${value} meters = ${roundMeterToFeet} feets | ${value} feets = ${roundFeetToMeter} meters`
    volumeResult.textContent = `${value} liters = ${roundLiterToGallon} gallons | ${value} gallons = ${roundGallonToLiter} liters`
    massResult.textContent = `${value} kilograms = ${roundKiloToPounds} pounds | ${value} pounds = ${roundPoundsToKilo} kilograms`

    //save to localStorage to persist result even in page refreshes
    localStorage.setItem("lengthResult", lengthResult.textContent)
    localStorage.setItem("volumeResult", volumeResult.textContent)
    localStorage.setItem("massResult", massResult.textContent)

}

//Get items from local storage
if (localStorage.getItem("lengthResult")) {
    lengthResult.textContent = localStorage.getItem("lengthResult");
} else {
    localStorage.clear()
}

if (localStorage.getItem("volumeResult")) {
    volumeResult.textContent = localStorage.getItem("volumeResult");
} else {
    localStorage.clear()
}

if (localStorage.getItem("massResult")) {
    massResult.textContent = localStorage.getItem("massResult");
} else {
    localStorage.clear()
}

//for the theme button
const toggleButton = document.getElementById('toggle-button');

// Initialize
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    toggleButton.textContent = savedTheme === 'dark-mode' ? '🌙' : '🌞';
} else {
    document.body.classList.add('light-mode');
    toggleButton.textContent = '🌞';
}

// Handle toggle with animation
toggleButton.addEventListener('click', () => {
    // Add animation class
    toggleButton.style.animation = 'rotateFade 0.6s ease';

    // Delay emoji swap to match animation midpoint
    setTimeout(() => {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');

        const isDark = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDark ? '🌙' : '🌞';

        localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
    }, 300); // Halfway through animation

    // Remove animation class after animation completes
    setTimeout(() => {
        toggleButton.style.animation = '';
    }, 600);
});
