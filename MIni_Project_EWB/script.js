console.log("--- Initializing Inventory System ---");

// 1. DATA AND INPUT
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

for (let attempt = 1; attempt <= 3; attempt++) {
  const nameInput = prompt("Enter new product name:", "Monitor");
  const priceInput = Number(prompt("Enter product price:", "150"));

  if (nameInput === null || nameInput.trim() === "") {
    console.log("Product name missing, try again.");
    continue;
  }
  if (isNaN(priceInput) || priceInput <= 0) {
    console.log("Invalid price, try again.");
    continue;
  }

  inventory.push({ name: nameInput.trim(), price: priceInput });
  console.log('[Prompt executed: User adds "' + nameInput.trim() + '" at "$' + priceInput + '"]');
  break;
}

// 2. CATEGORY FUNCTION
function getCategory(price) {
  let category;
  switch (true) {
    case price < 50: category = "Budget"; break;
    case price < 500: category = "Standard"; break;
    default: category = "Premium";
  }
  return category;
}

// 3. SEARCH FUNCTION
function findProduct(searchName) {
  let found = null;
  for (let i = 0; i < inventory.length; i++) {
    if (!inventory[i].name) continue;
    if (inventory[i].name.toLowerCase() === searchName.toLowerCase()) {
      found = inventory[i];
      break;
    }
  }
  return found;
}

// 4. CALCULATION FUNCTIONS
const calculateTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);

function applyTaxAndDiscount(amount, taxRate = 0, discountRate = 0) {
  const discounted = amount - (amount * discountRate) / 100;
  return discounted + (discounted * taxRate) / 100;
}

// 5. OUTPUT
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log("* Item: " + item.name + " ($" + item.price + ") -> Category: " + getCategory(item.price));
});

console.log("--- Financial Analytics ---");
const totalValue = calculateTotal(inventory);
console.log("Total Inventory Value: $" + totalValue);

const affordable = inventory.filter((item) => item.price < 200).map((item) => item.name);
console.log("Filtered Affordable Items (Under $200): " + JSON.stringify(affordable));

const report = inventory.map((item) => item.name.toUpperCase() + ": $" + item.price);
console.log("Formatted Report List: " + JSON.stringify(report));

console.log("Value after 10% discount and 18% tax: $" + applyTaxAndDiscount(totalValue, 18, 10).toFixed(2));
console.log("Search 'mouse': " + JSON.stringify(findProduct("mouse")));