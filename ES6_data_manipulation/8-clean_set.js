export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== "string") {
    return '';
  }

  const result = [];
  for(const word of set) {
    if (typeof word == "string" && word.startsWith(startString)) {
        result.push(word.substring(startString.length));
    }
  }
  return result.join('-');
}