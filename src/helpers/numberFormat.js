export default function numberFormat(number) {
  //Используем функцию из библиотеки INTL
  return Intl.NumberFormat().format(number);
}
