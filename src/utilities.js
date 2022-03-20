import { Logos } from "./assets/icons/exports";
export function displayLogos(strArr) {
  // strArr.map((elem)=1> {
  //   console.log(elem)
  // })
  // console.log(Object.entries(Logos).filter((Logo) => Logo === "NextJs"));
  const LogosJsx = Object.entries(Logos);
  console.log(Object.is(LogosJsx[0], "HTML5"));
  for (const [key, value] of LogosJsx) {
    return strArr.forEach((arr) => {
      // console.log(arr.find((i) => i === key));
    });
  }
}
