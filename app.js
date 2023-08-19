function setInnerText(elementId, value) {
  element = document.getElementById(elementId);
  element.innerText = value;
}

function addToCart(target) {
const cartContainer=document.getElementById("cart-container");

  const productName = target.childNodes[3].innerText.split("\n")[0];

  const li = document.createElement("li");
  li.classList.add("text-[#111]", "text-2xl", "font-medium", "mt-4","list-decimal");
  li.innerText=productName

  cartContainer.appendChild(li)
}
