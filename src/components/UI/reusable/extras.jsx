import { useState, useEffect } from "react";

export const Skeleton = ({ className, ...props }) => {
  return <i className={`skeleton h-full w-full ${className}`} {...props} />;
};
export function SkeletonText({ howMany = 1, className, ...props }) {
  return Array.from(howMany).map((number) => (
    <span key={number} className={`skeleton-text ${className}`} {...props} />
  ));
}
