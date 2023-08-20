let totalPrice = 0;

function setInnerText(elementId, value) {
  element = document.getElementById(elementId);
  element.innerText = value;
}

function addToCart(target) {
  const cartContainer = document.getElementById("cart-container");

  const productName = target.childNodes[3].innerText.split("\n")[0];

  const li = document.createElement("li");
  li.classList.add(
    "text-[#111]",
    "text-2xl",
    "font-medium",
    "mt-4",
    "list-decimal"
  );
  li.innerText = productName;

  cartContainer.appendChild(li);

  const productPrice = parseFloat(
    target.childNodes[3].innerText.split("\n")[2]
  );

  totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
  setInnerText("total-price", totalPrice);

  const purchaseBtn = document.getElementById("purchase-btn");
  purchaseBtn.removeAttribute("disabled");

  const discountBtn = document.getElementById("discount-btn");

  if (totalPrice >= 200) {
    discountBtn.removeAttribute("disabled");
  }

  setInnerText("total", totalPrice);
}

function applyDiscount() {
  const couponCode = document.getElementById("coupon-code").value;

  if (couponCode === "SELL200") {
    const discountAmount = (totalPrice * (20 / 100)).toFixed(2);
    setInnerText("discount", discountAmount);

    const finalPrice = totalPrice - discountAmount;
    setInnerText("total", finalPrice);
  } else {
    alert("Invalid Coupon code");
  }
}

function goHome() {
  window.location.href = "index.html";

  setInnerText("total-price", "00");
  setInnerText("discount", "00");
  setInnerText("total", "00");
}
