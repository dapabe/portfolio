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
//   ...props
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
//       {...props}
//     />
//   ) : (
//     <Skeleton ref={targetRef} />
//   );
// }
export function CustomImage({ src, ...props }) {
  const [stored, setStorage] = useState([]);
  // console.log(src);
  useEffect(() => {
    setStorage(src);
    // getSrc();
  }, []);
  if (!stored) return <Skeleton />;
  else
    return (
      <LazyLoadImage src={src} effect="opacity" threshold={0} {...props} />
    );
}
export const Skeleton = ({ className, ...props }) => {
  return <i className={`skeleton h-full w-full ${className}`} {...props} />;
};
export function SkeletonText({ howMany = 1, className, ...props }) {
  return Array.from(howMany).map((number) => (
    <span key={number} className={`skeleton-text ${className}`} {...props} />
  ));
}
export function VaporSun() {
  const lineArr = [];
  for (let i = 0; i < 10; i++) {
    lineArr.push(i);
  }
  return (
    <ul className="absolute h-72 w-72 overflow-hidden rounded-full bg-gradient-to-b from-[#ffcb55] to-[#ff0488] shadow-2xl ">
      {lineArr.map((i) => (
        <li
          className="absolute -bottom-[6vw] h-[10%] w-full animate-[wave_10s_linear_infinite] bg-vaporBlue"
          style={{ animationDelay: `-${[i]}s` }}
          key={i}
        />
      ))}
    </ul>
  );
}
