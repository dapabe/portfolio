import { lazy } from "react";

const FORM = import.meta.env.VITE_FORM_ID;
const P_KEY = import.meta.env.VITE_PUBLIC_KEY;

//  Simulate IRL page loading.
export const slowImport = (value, ms = 1000) =>
  lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
      })
  );

//  default keyword inside resolve because its a component.
export const fakeImportComponent = (value, ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ default: value }), ms);
  });

export const sendEmail = async (body) =>
  await emailjs.sendForm("default_service", FORM, body, P_KEY);

//  ===============================================================================================
//  Dinamically allow kbd focus.
export const notSelectable = (condition) => {
  return { ...(condition && { tabIndex: -1 }) };
};
export const isEmpty = (str) => str.trim().length === 0;
export const isEmail = (email) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

//  [HowWorks]    Takes a string[] as 1st parameter.
//                Returns the concidence else Null.
export const arrayCompareAndRetrieve = ({ aToLook, aToSearch, kToSearch }) => {
  const foundValues = aToSearch.filter((item1) =>
    aToLook.find((item2) => item2 === item1[kToSearch])
  );
  return foundValues.length === 0 ? null : foundValues;
};

export const arrayRetrieveWithDupe = ({ aToLook, aToSearch, kToSearch }) => {
  const foundValues = aToSearch.filter((item1) =>
    aToLook.find((item2) => item2 === item1[kToSearch])
  );
  const dupedArr = [...foundValues];
  dupedArr.push(...foundValues);
  return foundValues.length === 0 ? null : dupedArr;
};
