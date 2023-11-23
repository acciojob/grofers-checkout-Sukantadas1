const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 // Select all elements with class "prices"
  const pricesElements = document.querySelectorAll('.prices');

  // Initialize total price
  let totalPrice = 0;

  // Loop through the prices and sum them up
  pricesElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent.replace('$', '')); // Assuming prices are in the format $X.XX
    totalPrice += price;
  });

  // Create a new row for the total price
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.textContent = `Total: $${totalPrice.toFixed(2)}`;
  totalRow.appendChild(totalCell);

  // Append the total row to the table
  const table = document.querySelector('table');
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

