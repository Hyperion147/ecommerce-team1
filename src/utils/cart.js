// utils/cart.js

export function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(item) {
  const cart = getCart();

  // check if same product + size + color already exists
  const existingItem = cart.find(
    (c) =>
      c.id === item.id &&
      c.size === item.size &&
      c.color.hex === item.color.hex
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}
