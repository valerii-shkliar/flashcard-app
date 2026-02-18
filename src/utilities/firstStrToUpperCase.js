export default function firstStrToUpperCase(str) {
  const upperArr = str.split('');
  upperArr[0] = upperArr[0].toUpperCase();

  return upperArr.join('');
}
