function milesToKm(miles) {
  return miles * 1.60934;
}

function KmToMiles(km) {
  return km / 1.60934;
}

function cmToInches(cm) {
  return cm / 2.54;
}

function InchesTOCm(inches) {
  return inches * 2.54;
}
function handleFromSubmit() {
  console.log("Here");
  event.preventDefault();
  const miles = Number(document.getElementById("miles").value);
  const km = Number(document.getElementById("km").value);
  const inches = Number(document.getElementById("inches").value);

  const kmresult = milesToKm(miles);
  const milesresult = KmToMiles(km);
  const inchesresult = InchesTOCm(inches);

  document.getElementById("output").innerHTML =
    `<p>${miles} miles is ${kmresult.toFixed(2)}kilometers</p>` +
    `<p>${km} kilometers is ${milesresult.toFixed(2)}Miles</p>` +
    `<p>${inches}inches is ${inchesresult.toFixed(2)}Centimeters</p>`;
}

const form = document.querySelector("form");
form.addEventListener("submit", handleFromSubmit);
