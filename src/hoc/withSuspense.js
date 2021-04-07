import React from "react";
import Preloader from "../components/Preloader/Preloader";


export const withSuspense = (Component) => {
  
  return (props) => {
    return <React.Suspense fallback={<h1>Загружаюсь!</h1>}>
             <Component {...props} />
           </React.Suspense>
  };
}