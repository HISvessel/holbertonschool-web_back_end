export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }

  for (let [elem, value] of map) {
    if (value === 1) {
      map.set(elem, 100);
    }
  }
  return map;
}
