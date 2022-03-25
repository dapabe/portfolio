import data from "./assets/data.json";

export function CompareAndRetrieve(
  arrToLook,
  arrToSearch,
  keyToSearch,
  keyToReturn
) {
  const returnedValues = arrToSearch.filter((item1) => {
    const foundValues = arrToLook.find(
      (item2) => item2?.[keyToSearch] === item1?.[keyToSearch]
    );
    return foundValues && item1?.[keyToReturn];
  });

  return returnedValues;
}
