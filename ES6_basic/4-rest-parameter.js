export default function returnHowManyArguments(...manyArguments) {
  let counter = 0;
  for (const arg of manyArguments) {
    counter += 1;
  }
  return counter;
}
