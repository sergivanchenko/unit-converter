// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const oneMeterFeet = 3.281;
const oneLiterGallons = 0.264;
const oneKiloPounds = 2.204;

let userInput = document.getElementById('user-input');
let lengthMeteFeet = document.getElementById('lengthMeterFeet');
let convert = document.getElementById('btn');
let lengthMeterFeet = document.getElementById('lengthMeterFeet');
let volumeLitersGallons = document.getElementById('volumeLitersGallons');
let MassKiloPounds = document.getElementById('MassKiloPounds');

convert.addEventListener('click', function () {
  // Length
  let multiLength = (userInput.value * oneMeterFeet).toFixed(3);
  let divLength = (userInput.value / oneMeterFeet).toFixed(3);
  lengthMeteFeet.textContent = `${userInput.value} meters = ${multiLength} feet | ${userInput.value} feet = ${divLength} meters`;
  // Volume
  let multiVolume = (userInput.value * oneLiterGallons).toFixed(3);
  let divVolume = (userInput.value / oneLiterGallons).toFixed(3);
  volumeLitersGallons.textContent = `${userInput.value} liters = ${multiVolume} gallons | ${userInput.value} gallons = ${divVolume} liters`;
  // Mass
  let multiMass = (userInput.value * oneKiloPounds).toFixed(3);
  let divMass = (userInput.value / oneKiloPounds).toFixed(3);
  MassKiloPounds.textContent = `${userInput.value} kilos = ${multiMass} pounds | ${userInput.value} pounds = ${divMass} kilos`;
});
