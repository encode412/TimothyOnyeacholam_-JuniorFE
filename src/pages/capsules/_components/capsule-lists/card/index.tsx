import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from '../../../../../components/ui/button'
import { details } from "../../../../../features/cardSlice";
import { overlay } from "../../../../../features/overlaySlice";

interface CardTypes {
  rocket: any
  showButton: boolean
}
const Card: React.FC<CardTypes> = ({ rocket, showButton }) => {
  const [popupDetails, setPopupDetails] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPopupDetails(true);
  };
  


  const handleId = () => {
    handleClick()
    dispatch(details(rocket.capsule_serial))
    dispatch(overlay(popupDetails));
    
  }
  return (
    <>
   
    <div
      key={rocket?.original_launch}
      onClick={handleClick}
      className="flex flex-col gap-1 md:gap-3 hover:scale-105 hover:cursor-pointer justify-between transition-all ease-in bg-primary px-6 py-8 shadow-xl"
    >
      <img src={"/home/dragon.jpg"} className=" w-full" alt="" />
      <div className="flex justify-between">
        <span className="text-xs">{rocket?.type}</span>
        
      </div>{" "}
      <div className="flex justify-between">
        <span className="text-xs">Status</span>
        <span className="text-sm font-semibold">{rocket?.status}</span>
      </div>
     
      <div className="flex justify-between">
        <span className="text-xs">Number of landings</span>
        <span className="text-sm font-semibold">{rocket?.landings}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-xs">Serial</span>
        <span className="text-sm font-semibold">{rocket?.landings}</span>
      </div>
      {rocket?.missions.length > 0 ? (
        rocket?.missions.map((mission) => (
          <div className="flex justify-between">
            <span className="text-sm">mission:</span>
            <span>{mission.name}</span>
          </div>
        ))
      ) : (
        <div className="flex justify-between">
          <span>mission:</span>
          <span>N/A</span>
        </div>
      )}
      {rocket?.missions.length > 0 ? (
        rocket?.missions.map((mission) => (
          <div className="flex justify-between">
            <span className="text-sm">mission flight:</span>
            <span>{mission.flight}</span>
          </div>
        ))
      ) : (
        <div className="flex justify-between">
          <span className="text-sm">mission flight:</span>
          <span>N/A</span>
        </div>
      )}  
     {showButton && <div className="flex flex-col gap-1">
        <span className="text-sm">Overview</span>
        {rocket?.details ? <span className="text-sm text-start"> {rocket?.details}</span> : <span className="text-sm text-start"> N/A</span>}
        
      </div>}
      <div className={`${showButton && 'hidden'} flex justify-center items-center md:py-0 py-4`}>
      <Button onClick={handleId} children={'View details'}  />
      </div>
      
    </div>
    </>
  );
};

export default Card;
