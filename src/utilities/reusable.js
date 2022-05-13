import { lazy } from "react";

const FORM = import.meta.env.VITE_FORM_ID;
const P_KEY = import.meta.env.VITE_PUBLIC_KEY;

//  Simulate IRL page loading.
export function slowImport(value, ms = 1000) {
  return lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
      })
  );
}
//  default keyword inside resolve because its a component.
export function fakeImportComponent(value, ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ default: value }), ms);
  });
}

export async function sendEmail(body) {
  return await emailjs.sendForm("default_service", FORM, body, P_KEY);
}

//  Compare the 1st Object[] to the 2nd, searches into the 2nd array
//  and filters the object with the 1st keyword, if it matches
//  then retrieves the exact object where the 2nd keyword of the 2nd array[obj] is.

//  If the "keyToReturn" is present, return the filtered object,
//  otherwise returns null.
export function compareAndRetrieve({
  aToLook,
  aToSearch,
  kToSearch,
  kToReturn,
}) {
  const returnedValues = aToSearch.filter((item1) => {
    const foundValues = aToLook.find(
      (item2) => item2[kToSearch] === item1[kToSearch]
    );
    return foundValues && item1[kToReturn];
  });
  return returnedValues.length !== 0 ? returnedValues : null;
}
//  [HowWorks]    Works exactly as compareAndRetrieve except this
//                function takes a string[] as 1st parameter.
//                Returns the concidence else Null.
export function arrayCompareAndRetrieve({ aToLook, aToSearch, kToSearch }) {
  const returnedValues = aToSearch.filter((item1) => {
    return aToLook.find((item2) => item2 === item1[kToSearch]);
  });
  return returnedValues.length !== 0 ? returnedValues : null;
}
export function retrieveWithDupe(aToLook, aToSearch, kToSearch) {
  //  Does the same as compareAndRetrieve() but it doesn't filter
  //  the coincidences and return it all.
  // const returnedVaues =
}
