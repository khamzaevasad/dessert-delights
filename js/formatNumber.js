export function formatNumber(price) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(price.toFixed(2));
}
