// *** The input message *** //
const userInput = prompt("Enter your favorite Froyo flavors:");

// Array of string splits ///
if (userInput) {
  const flavors = userInput.split(",");
  console.log(flavors);

  const flavorCounts = countFlavorOrders(flavors);

  if (Object.keys(flavorCounts).length === 0) {
    console.log("Enter valid flavors.");
  } else {
    console.log("Thank you!! Please review your order:"); // Output if atleast 1 value added //
    for (const [flavor, count] of Object.entries(flavorCounts)) {
      console.log(`${flavor}: ${count} order${count > 1 ? "s" : ""}`);
    }
  }
} else {
  console.log("No flavors added, please add atleast 1 flavor to the order."); // Output for blank value //
}

// Loop for flavors /// switch done to the end //
// Variable and function have proper name tags //
function countFlavorOrders(flavors) {
  const flavorCounts = {}; // object count //
  for (let flavor of flavors) {
    const standardflavor = flavor.trim().toLowerCase();
    if (standardflavor) {
      if (flavorCounts[standardflavor]) {
        flavorCounts[standardflavor]++;
      } else {
        flavorCounts[standardflavor] = 1;
      }
    }
  }
  return flavorCounts;
}
