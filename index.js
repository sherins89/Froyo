// The input prompt for the list of froyo flavors
const input = prompt("Enter your favourite Froyo flavors:");

// Split input
const flavors = input.split(",");
console.log(flavors);

// Loop for arrays of flavors // and Object to keep a count
const flavorCount = {};

for (let flavor of flavors) {
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
}

// Number of each flavor *** CHECK AGAIN ***
function countFlavors(flavors) {
  const flavorCount = {};

  for (let flavor of flavors) {
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  }

  return flavorCount;
}
