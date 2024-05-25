function setTip(tipPercentage) {
  const tipAmount = calculateTip(tipPercentage);
  document.querySelector(".amount-chosen").textContent = `Selection: $${tipAmount.toFixed(2)}`;
  if (tipPercentage === 5) {
    document.querySelector(".comment").textContent = 'bum'
  } else if (tipPercentage === 10) {
    document.querySelector(".comment").textContent = 'ok'
  } else if (tipPercentage === 20) {
    document.querySelector(".comment").textContent = 'better'
  }
}

function calculateTip(percentage) {
  // You can customize the total bill amount here (e.g., replace 100 with your actual bill amount)
  const billAmount = 100;
  return (billAmount * percentage) / 100;
}

function setCustomTip() {
  const customTip = prompt("Enter your custom tip amount:");
  if (customTip !== null) {
    const parsedTip = parseFloat(customTip);
    if (!isNaN(parsedTip)) {
      document.querySelector(".amount-chosen").textContent = `Selection: $${parsedTip.toFixed(2)}`;
      if (parsedTip < 5) {
        document.querySelector(".comment").textContent = '?????????????????'
      } else if (parsedTip > 20) {
        document.querySelector(".comment").textContent = 'rich mf'
      }
    } else {
      alert("Invalid input. Please enter a valid numeric value.");
    }
  }
}

function hideNoTipButton() {
  const noTipButton = document.getElementById('none-button');
  noTipButton.style.opacity = "0"

  setTimeout(function() {
    noTipButton.style.opacity = '1'
  }, 1000);
};
