export function formatNumber(price) {
  return new Intl.NumberFormat("usd-US", {
    currency: "USD",
    style: "currency",
  }).format(price.toFixed(2));
}
