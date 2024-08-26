export function formatMoney(amount: number): string {
  // Round the amount to the nearest thousand
  const roundedAmount = Math.round(amount / 1000) * 1000;

  // Convert the number to a string with commas as thousands separators
  return roundedAmount.toLocaleString('fa-IR');
}