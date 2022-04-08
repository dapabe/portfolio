//  Compare the 1st array to the 2nd, searches into the 2nd array
//  and filters the object with the 1st keyword, if it matches
//  then retrieves the exact object where the 2nd keyword of the 2nd array[obj] is.

//  If the "keyToReturn" is present, return the filtered object,
//  otherwise returns undefined.
export function CompareAndRetrieve({
  arrToLook,
  arrToSearch,
  keyToSearch,
  keyToReturn,
}) {
  const returnedValues = arrToSearch.filter((item1) => {
    const foundValues = arrToLook.find(
      (item2) => item2[keyToSearch] === item1[keyToSearch]
    );
    return foundValues && item1[keyToReturn];
  });
  return returnedValues.length !== 0 ? returnedValues : undefined;
}

export function CompareAndRetrieveAll(
  arrToLook,
  arrToSearch,
  keyToSearch,
  keyToReturn
) {
  //  Does the same as CompareAndRetrieve() but it doesn't filter
  //  the coincidences and return it all.
  // const returnedVaues =
}
