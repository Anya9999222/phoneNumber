export default function checkNumber(...number) {
  const array = Array.from(...number);
  const result = [];

  if (array[0] !== '+') {
    array.splice(0, 1);
    result.push('+', '7');
  }

  array.forEach((num) => {
    if (/[0-9+]/.test(num)) {
      result.push(num);
    }
  });
  return result.join('');
}
