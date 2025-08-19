export default function returnHowManyArguments(...manyArgs) {
  let counter = 0;
  for (const arg of manyArgs){
    counter += 1;
  }
  return counter;
}
