export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  const intersection = set.intersection(newSet);
  const diff = newSet.difference(intersection);
  if (diff.size !== 0) {
    return false;
  }
  return true
}
