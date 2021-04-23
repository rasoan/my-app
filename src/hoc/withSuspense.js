import React from "react";
import PreloaderDefault from "../components/Preloaders/PreloaderDefault";

export const withSuspense = (Component) => {
  return (props) => {
    return <React.Suspense fallback={<PreloaderDefault />}>
             <Component {...props} />
           </React.Suspense>
  };
}