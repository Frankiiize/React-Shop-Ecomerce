import React from "react";
import '../styles/skeletonLoading.scss'

const  ErrorState = ({error}) => {
  console.log( error)
  return (
    <div className="skeletonContainer">
      <p className="skeletonContainer__errorState"> Ocurrio un error </p>
    </div>
  );
}

const LoadingState = () => {
  return(
    <div className="skeletonContainer">
      <div className="skeletonContainer__loadinCart"></div>
    </div>
  );
}

export { ErrorState, LoadingState}