export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  const diff = newSet.difference(set);
  if (diff.size !== 0) {
    return false;
  }
  return true
}
