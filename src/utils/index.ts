export function generateNumericId() {
  const timestamp = Date.now().toString();          // 13 цифр
  const randomPart = Math.floor(Math.random() * 1e6).toString().padStart(6, '0'); // 6 цифр
  return Number(timestamp + randomPart);                    // итого 19 цифр
}