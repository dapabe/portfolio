import { useState, useEffect } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
