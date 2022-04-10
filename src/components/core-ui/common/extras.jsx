import { createRef, useState, useEffect, forwardRef } from "react";
// import useObserver from "@hooks/useObserver";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
//  Refactor this
// export function Cimg({
//   src,
//   alt,
//   className,
//   placeholder = false,
//   ...attr
// }) {
//   const targetRef = createRef(null);
//   const [hasLoaded, setLoading] = useState(false);
//   const [isVisible] = useObserver(targetRef, {
//     rootMargin: "0px 0px -400px 0px",
//     threshold: 0,
//   });
//   const checkLoading = () => isVisible && setLoading(true);
//   const usePlaceholder = (placeholder && `skeleton ${className}`) || className;
//   // const image = require(src);

//   useEffect(() => {}, [isVisible]);

//   return isVisible ? (
//     <img
//       src={src || "/images/placeholder.jpg"}
//       alt={alt || "Imagen"}
//       // onLoad={()=>setLoading(true)}
//       className={hasLoaded ? className : usePlaceholder}
//       {...attr}
//     />
//   ) : (
//     <Skeleton ref={targetRef} />
//   );
// }
export function CustomImage({ src, ...attr }) {
  const [stored, setStorage] = useState([]);
  // console.log(src);
  useEffect(() => {
    setStorage(src);
    // getSrc();
  }, []);
  if (!stored) return <Skeleton />;
  else
    return <LazyLoadImage src={src} effect="opacity" threshold={0} {...attr} />;
}
export const Skeleton = ({ className, ...attr }) => {
  return <i className={`skeleton h-full w-full ${className}`} {...attr} />;
};
export function SkeletonText({ howMany = 1, className, ...attr }) {
  return Array.from(howMany).map((number) => (
    <span key={number} className={`skeleton-text ${className}`} {...attr} />
  ));
}
