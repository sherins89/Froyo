/// Loop for flavors ///
function countFlavorOrders(flavors) {
  const flavorCounts = {};
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
    console.log("Thank you!! Please review your order:");
    for (const [flavor, count] of Object.entries(flavorCounts)) {
      console.log(`${flavor}: ${count} order${count > 1 ? "s" : ""}`);
    }
  }
} else {
  console.log("No flavors added, please add atleast 1 flavor to the order.");
}
